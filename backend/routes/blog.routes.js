// routes/blog.routes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const verifyAdmin = require('../middleware/auth.js');
const BlogController = require('../controllers/blog.controller');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/blogs'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

router.post('/', verifyAdmin, upload.single('image'), BlogController.createBlog);

module.exports = router;
