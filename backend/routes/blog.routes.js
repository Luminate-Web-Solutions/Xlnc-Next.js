const express = require("express");
const multer = require("multer");
const path = require("path");
const Blog = require("../models/blog.model");

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.findAll({ order: [["createdAt", "DESC"]] });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

// ✅ Paste this route here:
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body;
    let imageUrl = null;

    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    const newBlog = await Blog.create({
      title,
      description,
      imageUrl,
    });

    res.status(201).json(newBlog);
  } catch (err) {
    console.error("Error creating blog:", err);  // Shows the actual server error
    res.status(500).json({ error: "Failed to create blog" });
  }
});

module.exports = router;
