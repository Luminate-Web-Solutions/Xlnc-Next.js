const express = require('express');
const router = express.Router();
const multer = require('multer');
const verifyAdmin = require('../middleware/auth.js');
const BlogController = require('../controllers/blog.controller');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/blogs'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// ADMIN: Create blog
router.post('/', verifyAdmin, upload.single('image'), BlogController.createBlog);

// PUBLIC: Get all blogs
router.get('/', BlogController.getAllBlogs);

// PUBLIC: Get single blog by ID
router.get('/:id', BlogController.getBlogById);

module.exports = router;
