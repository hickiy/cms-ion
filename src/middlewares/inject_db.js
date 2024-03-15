const get_db = require('./get_db.js');

module.exports = function (req, res, next) {
  const db = get_db('test');
  req.db = db;
  next();
}