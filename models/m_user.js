//导入数据库模块
const connection = require("../config/db_config");


//把数据库操作部分提取出来
exports.checkEmail = (email,callback)=>{
	//数据库语句
	const sqlstr = "select * from `users` where email=?";
	//连接数据库查询数据
	connection.query(sqlstr, email, (err, data) => {
		//在方法的外部使用方法总异步操作中返回的结果
		if(err){
			callback(err,null);
		}else{
			callback(null,data);
		}
	});
};
