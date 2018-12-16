//导包
//导入数据库包mysql
const my
//2.用户登录函数
exports.userSignin = (req,res) => {
	//会自动去views文件夹下找指定文件
	res.render("signin.html");
};
//用户登录表单提交
exports.userForm = (req,res) => {
	const formData = req.body;//得到提交的表单对象
	//console.log(formData);
	//连接数据库查询数据
};
