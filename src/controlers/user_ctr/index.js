const express = require('express');
const router = express.Router();
const get_db = require('../../middlewares/get_db.js');
const user_schema = require('../../models/user_schema.js');

router.post('/create', async (req, res) => {
  const db = get_db('admin');
  const user = db.model('user', user_schema);
  res.send('create user');
});

module.exports = router;