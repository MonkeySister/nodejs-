//路由模块
//1.导入包
const express = require("express");
//导入函数处理包
const user = require("./controllers/u_signin")
//2.实例化router
const router = express.Router();
//3.配置路由实现方法
//登录页面展现
router.get("/signin",user.userSignin);
//登录页面表单提交
router.post("/signin",user.userForm);
//4.导出路由模块
module.exports = router;
