import dbconnection from '../models/db.js';

export default async function injectConect(req, res, next) {
  req._db_ = await dbconnection('test');
  next();
}