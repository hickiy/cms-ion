import express from 'express';
const router = express.Router();

router.post('/upload', (req, res) => {
  console.log(req._db_);
  res.send('upload file')
})

export default router;