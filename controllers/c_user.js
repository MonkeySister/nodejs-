//导包
const m_user = require("../models/m_user");

//2.用户登录函数
exports.userSignin = (req, res) => {
	//会自动去views文件夹下找指定文件
	res.render("signin.html");
};
//用户登录表单提交
exports.userForm = (req, res) => {
	//const formData = req.body; //body-parser包，得到提交的表单对象
	m_user.checkEmail(req.body.email, (err, data) => {
		if(err)
			return res.send({
				code: 500,
				mess: "服务器发生错误！"
			});
		//数据库查询值为数组
		//验证邮箱是否存在
		if(data.length == 0)
			return res.send({
				code: 204, //请求收到但返回内容为空，邮箱不存在
				mess: "邮箱不存在！"
			});
		//验证密码是否正确
		if(data[0].password !== req.body.password)
			return res.send({
				code: 204,
				mess: "密码错误！"
			});
		//登陆成功,保存用户信息到session中
		req.session.user = data[0];//是一个对象
		//console.log(req.session.user);
		//返回响应
		res.send({
			code: 200,
			mess: "登陆成功"
		});
	});
};
//用户退出功能
exports.signinOut = (req,res) =>{
	//删除session
	delete req.session.user;
	//a标识请求为同步请求，可以在服务端进行页面跳转
	res.redirect("/signin");
};
