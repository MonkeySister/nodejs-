//路由模块
//1.导入包
const express = require("express");
//导入函数处理包
const c_user = require("./controllers/c_user")
//2.实例化router
const router = express.Router();
//3.配置路由实现方法
//登录页面展现
router.get("/signin",c_user.userSignin);
//登录页面表单提交
router.post("/sign",c_user.userForm);
//4.导出路由模块
module.exports = router;
