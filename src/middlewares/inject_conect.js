const get_connection = require('../models/db.js');

module.exports = function (req, res, next) {
  const { db } = get_connection('test');
  req.db = db;
  next();
}