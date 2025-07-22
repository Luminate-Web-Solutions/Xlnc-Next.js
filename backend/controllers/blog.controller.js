const Blog = require('../models/blog.model');

// Create Blog
exports.createBlog = async (req, res) => {
  try {
    const { title, category, content } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const image = req.file.filename;
    const blog = await Blog.create({ title, category, content, image });

    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (err) {
    console.error('Blog upload error:', err);
    res.status(500).json({ message: 'Failed to upload blog', error: err.message });
  }
};

// Get All Blogs (for public view)
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({ order: [['createdAt', 'DESC']] });
    res.status(200).json({ blogs });
  } catch (err) {
    console.error('Fetch blogs error:', err);
    res.status(500).json({ message: 'Failed to fetch blogs', error: err.message });
  }
};

// Get Single Blog (optional)
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({ blog });
  } catch (err) {
    console.error('Fetch single blog error:', err);
    res.status(500).json({ message: 'Failed to fetch blog', error: err.message });
  }
};
