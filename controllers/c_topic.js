//导入时间moment包
const moment = require('moment');
//导入数据库操作
const m_topic = require("../models/m_topic");
//渲染列表页
exports.showTopicList = (req,res) =>{
	//调用数据库操作函数
	m_topic.findAllList((err,data)=>{
		if(err) { return res.send({
			code:500,
			mess:"服务器发生错误！"
		});}
		res.render('index.html',{
			mess:data,
			//session数据
			user:req.session.user
		});
	});
};
//添加文章页渲染
exports.showTopicAdd = (req,res) => {
	res.render("topic/create.html");
};
//添加文章
exports.topicAdd = (req,res) => {
	const body = req.body;
	console.log(body);
	//给文章数据添加添加时间
	body.createdAt = moment().format();
	//给文章数据添加创建者id
	body.userId = req.session.user.id;
	//操作表单数据
	console.log(body);
	m_topic.newTopic(body,(err,data)=>{
		if(err) return res.send({
			code:500,
			mess:"服务器出错！"
		});
		res.send({
			code:200,
			mess:"添加数据成功"
		});
	});
};
//文章详情页渲染
exports.showTopicsDetail = (req,res) => {
	//获取动态参数
	var topicId = req.params.topicId;
	//拿到参数请求操作数据库
	m_topic.showTopicsDetail(topicId,(err,data)=>{
		if(err) return res.send({
			code:400,
			mess:"服务器出错!"
		})
		/*if(data.length == 0) 
			return res.send({
				code:204,
				mess:"该文章已被作者删除"
			});*/
		res.render("topic/show.html",{
			code:200,
			mess:data[0],
			sessionUserId:req.session.user.id
		});
	});	
};
//删除文章
exports.deleteTopic = (req,res) =>{
	//获取变量
	const topicId = req.params.topicId;
	//调用数据库操作删除文章
	m_topic.deleteTopic(topicId,(err,data)=>{
		if(err) return res.send({
			code:400,
			mess:"服务端发生错误"
		});
		/*res.send({
			code:200,
			mess:"删除成功！"
		});*/
		//删除成功跳转
		res.redirect("/");
	});
};
//渲染文章编辑页
exports.showEditTopic = (req,res) => {
	//获取变量
	const topicId = req.params.topicId
	m_topic.showEditTopic(topicId,(err,data)=>{
		if(err) return res.send({
			code:400,
			mess:"服务端发生错误"
		});
		res.render("topic/edit.html",{
			code:200,
			mess:data[0]
		});
	});
};
//更新文章
exports.updateTopic = (req,res) => {
	//获取修改的id
	const topicId = req.params.topicId;
	//获取表单提交数据
	const formDate = req.body;
	//调用数据库方法操作数据
	m_topic.updateTopic(formDate,topicId,(err,data)=>{
		if(err) return res.send({
			code:400,
			mess:"服务端发生错误"
		});
		res.send({
			code:200,
			mess:"更新成功！"
		});
	});
};
