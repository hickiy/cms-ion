const get_db_url = require('./inject_conect.js');

module.exports = function (app) {
  // 注入数据库连接
  app.use(get_db_url);
  // TODO: 全局错误处理
}