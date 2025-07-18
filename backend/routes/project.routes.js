const express = require("express");
const multer = require("multer");
const authenticate = require("../middleware/auth");
const Project = require("../models/project.model");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

router.post("/upload", authenticate, upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file?.filename;

    const project = await Project.create({ title, description, image });
    res.json({ message: "Project uploaded", project });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
});

module.exports = router;
