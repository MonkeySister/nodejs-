const connection = require("../config/db_config");
//文章相关的数据库操作
exports.findAllList = (callback)=>{
	const sqlstr = "select * from `topics`order by id desc";
	connection.query(sqlstr, (err, data) => {
		//在方法的外部使用方法总异步操作中返回的结果
		if(err) return callback(err,null);
		callback(null,data);
	});
};
//添加文章
exports.newTopic = (formData,callback) =>{
	const sqlStr = "insert into `topics` set ?";
	connection.query(sqlStr,formData,(err,data)=>{
		if(err) return callback(err,null);
		callback(null,data);
	})
};
//显示文章详情
exports.showTopicsDetail = (topicId,callback) => {
	const sqlStr = "select * from `topics` where id=?";
	connection.query(sqlStr,topicId,(err,data)=>{
		if(err) return callback(err,null);
		return callback(null,data);
	});
};
//删除文章
exports.deleteTopic = (topicId,callback)=>{
	const sqlStr = "delete from `topics` where id=?";
	connection.query(sqlStr,topicId,(err,data)=>{
		if(err) return callback(err,null);
		return callback(null,data);
	});
};
//渲染文章编辑页
exports.showEditTopic = (topicId,callback) =>{
	const sqlStr = "select * from `topics` where id=?";
	connection.query(sqlStr,topicId,(err,data)=>{
		if(err) return callback(err,null);
		return callback(null,data);
	});
};
exports.updateTopic = (formData,topicId,callback) => {
	const sqlStr = "update `topics` set ? where id=?";
	connection.query(sqlStr,[formData,topicId],(err,data)=>{
		if(err) return callback(err,null);
		callback(null,data);
	})
}
