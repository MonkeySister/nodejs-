//1.导包
const express = require("express");
//导入路由模块
const router = require("./router");
//导入body-parser包
const bodyParser = require('body-parser');
//导入session包
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
var options = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'news'
};
const sessionStore = new MySQLStore(options);
//2.配置
const app = express();

//配置静态资源
app.use("/public", express.static("./public"));
app.use("/node_modules", express.static("./node_modules"));
app.engine('html', require('express-art-template'));

//给req增加一个body属性
app.use(bodyParser.urlencoded({
	extended: false
}));

//配置express-mysql-session
app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));
//配置router包
app.use(router);

//4.监听端口
app.listen(12345, () => {
	console.log("run start at 12345....");
});
//导出