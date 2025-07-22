const express = require("express");
const router = express.Router();
const multer = require("multer");
const Project = require("../models/project.model");
const verifyAdmin = require("../middleware/auth.js");

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

/**
 * @route   POST /api/projects
 * @desc    Upload a new project
 * @access  Admin only
 */
router.post("/", verifyAdmin, upload.single("image"), async (req, res) => {
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
    res.status(500).json({ message: "Failed to upload project", error: err.message });
  }
});

/**
 * @route   GET /api/projects
 * @desc    Get all projects
 * @access  Public
 */
router.get("/", async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch projects", error: err.message });
  }
});

/**
 * @route   GET /api/projects/category/:category
 * @desc    Get projects by category
 * @access  Public
 */
router.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  try {
    const projects = await Project.findAll({ where: { category } });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch by category", error: err.message });
  }
});

/**
 * @route   PUT /api/projects/:id
 * @desc    Update a project
 * @access  Admin only
 */
router.put("/:id", verifyAdmin, upload.single("image"), async (req, res) => {
  const { title, description, popupDesc, category } = req.body;
  const { id } = req.params;

  try {
    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    project.title = title || project.title;
    project.description = description || project.description;
    project.popupDesc = popupDesc || project.popupDesc;
    project.category = category || project.category;
    if (req.file?.filename) {
      project.image = req.file.filename;
    }

    await project.save();
    res.json({ message: "Project updated", project });
  } catch (err) {
    res.status(500).json({ message: "Failed to update project", error: err.message });
  }
});

/**
 * @route   DELETE /api/projects/:id
 * @desc    Delete a project
 * @access  Admin only
 */
router.delete("/:id", verifyAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    await project.destroy();
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete project", error: err.message });
  }
});

module.exports = router;
