const get_db = require('../models/db.js');

module.exports = function (req, res, next) {
  req._db_ = get_db('test');
  next();
}