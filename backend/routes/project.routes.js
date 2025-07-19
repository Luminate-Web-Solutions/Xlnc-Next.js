const express = require("express");
const router = express.Router();
const multer = require("multer");
const Project = require("../models/project.model");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Upload a new project
router.post("/", upload.single("image"), async (req, res) => {
  const { title, description, popupDesc, category } = req.body;
  const image = req.file?.filename;

  if (!title || !description || !popupDesc || !category || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const project = await Project.create({
      title,
      description,
      popupDesc,
      category,
      image,
    });
    res.status(201).json({ message: "Project uploaded", project });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to upload project", error: err.message });
  }
});

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch projects", error: err.message });
  }
});

// Filter by category
router.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  try {
    const projects = await Project.findAll({ where: { category } });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch by category", error: err.message });
  }
});

module.exports = router;
