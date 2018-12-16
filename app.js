//1.导包
const express = require("express");
//2.配置
const app = express();
//3.使用路由
//导入路由模块
const router = require("./router");
app.use(router);
//4.监听端口
app.listen(12345,()=>{
	console.log("run start at 12345....");
});
//导出