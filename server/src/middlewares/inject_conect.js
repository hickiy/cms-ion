const get_connection = require('../models/db.js');

module.exports = function (req, res, next) {
  const { db, db_url } = get_connection('test');
  req.db_url = db_url;
  req.db = db;
  next();
}