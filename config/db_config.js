//mysql包导入
const mysql = require('mysql');
//配置数据库
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'news'
});
//连接数据库
connection.connect();
//到处数据库链接
module.exports = connection;