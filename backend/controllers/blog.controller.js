const Blog = require('../models/blog.model');
const fs = require('fs');
const path = require('path');

// CREATE
exports.createBlog = async (req, res) => {
  try {
    const { title, category, content } = req.body;
    if (!req.file) return res.status(400).json({ message: 'Image is required' });

    const image = req.file.filename;
    const blog = await Blog.create({ title, category, content, image });

    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (err) {
    console.error('Blog upload error:', err);
    res.status(500).json({ message: 'Failed to upload blog', error: err.message });
  }
};

// READ ALL
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json({ blogs });
  } catch (err) {
    console.error('Fetch blogs error:', err);
    res.status(500).json({ message: 'Failed to fetch blogs', error: err.message });
  }
};

// READ ONE
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json({ blog });
  } catch (err) {
    console.error('Fetch single blog error:', err);
    res.status(500).json({ message: 'Failed to fetch blog', error: err.message });
  }
};

// UPDATE
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    const { title, category, content } = req.body;

    if (req.file) {
      // Delete old image
      const oldImagePath = path.join(__dirname, '../uploads/blogs', blog.image);
      if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);

      blog.image = req.file.filename;
    }

    blog.title = title;
    blog.category = category;
    blog.content = content;
    await blog.save();

    res.status(200).json({ message: 'Blog updated successfully', blog });
  } catch (err) {
    console.error('Update blog error:', err);
    res.status(500).json({ message: 'Failed to update blog', error: err.message });
  }
};

// DELETE
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // Delete image
    const imagePath = path.join(__dirname, '../uploads/blogs', blog.image);
    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);

    await blog.destroy();

    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error('Delete blog error:', err);
    res.status(500).json({ message: 'Failed to delete blog', error: err.message });
  }
};
