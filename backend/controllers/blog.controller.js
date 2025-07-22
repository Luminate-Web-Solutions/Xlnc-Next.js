exports.createBlog = async (req, res) => {
  try {
    const { title, category, content } = req.body;

    // Check if image was uploaded
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
