const express = require('express');
const router = express.Router();
const multer = require('multer');
const verifyAdmin = require('../middleware/auth');
const BlogController = require('../controllers/blog.controller');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/blogs'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// ADMIN: Create a blog post
router.post('/', verifyAdmin, upload.single('image'), BlogController.createBlog);

// PUBLIC: Get all blogs
router.get('/', BlogController.getAllBlogs);

// PUBLIC: Get a single blog by ID
router.get('/:id', BlogController.getBlogById);

// ADMIN: Update blog (optional)
router.put('/:id', verifyAdmin, upload.single('image'), BlogController.updateBlog);

// ADMIN: Delete blog (optional)
router.delete('/:id', verifyAdmin, BlogController.deleteBlog);

module.exports = router;
