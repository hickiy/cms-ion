const inject_conect = require('./inject_conect.js');

module.exports = function (app) {
  // 注入数据库连接
  app.use(inject_conect);
  // TODO: 全局错误处理
}