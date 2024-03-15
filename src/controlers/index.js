// 在req中注入db对象，这样在每个接口中都可以直接使用db对象，而不需要在每个接口中都去连接数据库
const inject_db = require('../middlewares/inject_db.js')

module.exports = function (app) {
  // 文件相关接口
  app.use('/file', inject_db, require('./file_ctr/index.js'))
  // 用户相关接口
  app.use('/user', require('./user_ctr/index.js'))
}