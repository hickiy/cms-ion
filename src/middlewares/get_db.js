// db.js
const mongoose = require('mongoose');

const connection = mongoose.createConnection(`mongodb://127.0.0.1:27017`, {
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
module.exports = function (name, user = null, pass = null) {
  const db = connection.useDb(name);
  return db;
}

