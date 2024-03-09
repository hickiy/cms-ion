// db.js
const mongoose = require('mongoose');

const connection = mongoose.createConnection(`mongodb://127.0.0.1:27017/test`, {
  // user: user,
  // pass: pass,
});

// 监听连接的事件
connection.on('connected', () => {
  console.log('连接成功');
});

// 监听连接的错误事件
connection.on('error', (err) => {
  throw err;
});

// 获取连接的函数
module.exports = function get_db_url(name, user = null, pass = null) {
  const db = connection.db || connection.useDb(name).db;
  const db_url = `${connection._connectionString}/${name}`;

  // 通过返回对象的方式，返回db和db_url
  return { db, db_url };
}

