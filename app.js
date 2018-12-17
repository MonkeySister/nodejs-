//1.导包
const express = require("express");
//导入body-parser包
const bodyParser = require('body-parser');

//2.配置
const app = express();
//配置静态资源
app.use("/public",express.static("./public"));
app.use("/node_modules",express.static("./node_modules"));
app.engine('html', require('express-art-template'));
//给req增加一个body属性
app.use(bodyParser.urlencoded({ extended: false }));
//3.使用路由
//导入路由模块
const router = require("./router");
app.use(router);
//4.监听端口
app.listen(12345,()=>{
	console.log("run start at 12345....");
});
//导出