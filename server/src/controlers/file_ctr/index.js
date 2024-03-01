const express = require('express');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const router = express.Router();
router.post('/upload', (req, res) => {
  const storage = new GridFsStorage({
    db: req._db_, file: (req, file) => {
      return {
        filename: 'file_' + Date.now()
      };
    }
  });
  const upload = multer({ storage }).single('file');
  upload(req, res, (err) => {
    if (err) {
      res.status(400).send('Error uploading file');
    } else {
      res.status(200).send('File uploaded');
    }
  });
})

module.exports = router;