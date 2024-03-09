const file_ctr = require('./file_ctr/index.js')

module.exports = function (app) {
  app.use('/file', file_ctr)
}