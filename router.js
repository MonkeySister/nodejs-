//路由模块
//1.导入包
const express = require("express");
//导入函数处理包
const c_user = require("./controllers/c_user");
const c_topic = require("./controllers/c_topic");
//2.实例化router
const router = express.Router();
//3.配置路由实现方法
//登录页面展现
router.get("/signin",c_user.userSignin)
			//登录页面表单提交
			.post("/signin",c_user.userForm)
			//列表页渲染
			.get("/",c_topic.showTopicList)
			//发布文章页渲染
			.get("/topic/create",c_topic.showTopicAdd)
			//发布文章表单提交
			.post("/createTopic",c_topic.topicAdd)
			//退出功能
			.get("/signout",c_user.signinOut)
			//渲染详情页面
			.get("/detail/topics/:topicId",c_topic.showTopicsDetail)
			//删除文章
			.get("/topic/detail/delete/:topicId",c_topic.deleteTopic)
			//渲染文章编辑页
			.get("/topic/detail/edit/:topicId",c_topic.showEditTopic)
			//更新文章
			.post("/edit/:topicId",c_topic.updateTopic)
			//注册页面
			.get("/signup",c_user.signup);
//4.导出路由模块
module.exports = router;
