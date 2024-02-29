// db.js
import mongoose from 'mongoose';
// 保存所有的连接
const connections = {};
// 轮询过期的连接并关闭
setInterval(() => {
  for (let key in connections) {
    const connection = connections[key];
    // maxAge是连接的最大存活时间，单位是分钟
    if (--connection._maxAge_ == 0) {
      connection.close();
      delete connections[key];
    }
  }
}, 1000 * 60);

// 获取连接的函数
export default function getConnection(name, user = null, pass = null) {
  if (connections[name]) {
    // 如果已经有了对应的连接，就复用这个连接
    const connection = connections[name];
    // 重置连接的最大存活时间
    connection._maxAge_ = 10;
    return connections[name];
  } else {
    // 否则，创建新的连接并保存到connections对象中
    const connection = mongoose.createConnection(`mongodb://127.0.0.1:27017/${name}`, {
      // user: user,
      // pass: pass,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // 设置连接的最大存活时间
    connection._maxAge_ = 10;

    // 监听连接的错误事件
    connection.on('error', (err) => {
      throw err;
    });

    connections[name] = connection;
    return connection;
  }
}

