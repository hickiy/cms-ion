const express = require('express');
const multer = require('multer');
const { MongoClient, GridFSBucket } = require('mongodb');
const router = express.Router();
router.post('/upload', multer().single('file'), (req, res) => {
  const db = req.db;
  const bucket = new GridFSBucket(db);
  const { originalname, buffer } = req.file;
  const uploadStream = bucket.openUploadStream(originalname);
  const id = uploadStream.id;
  uploadStream.end(buffer);
  res.send({ id });
})

router.get('/download/:filename', async (req, res) => {
  const { filename } = req.params;
  const db = req.db;
  const bucket = new GridFSBucket(db);
  const downloadStream = bucket.openDownloadStreamByName(filename);
  downloadStream.pipe(res);
});

module.exports = router;