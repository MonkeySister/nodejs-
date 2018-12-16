//路由模块
//1.导入包
const express = require("express");
//导入函数处理包
const user = require("./controllers/u_login")
//2.实例化router
const router = express.Router();
//3.配置路由实现方法
router.get("/",user.userLogin);
//4.导出路由模块
module.exports = router;
