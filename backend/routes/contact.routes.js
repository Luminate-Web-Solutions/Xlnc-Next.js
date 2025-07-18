// backend/routes/project.routes.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const Project = require("../models/project.model"); // or correct path

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), async (req, res) => {
  const { title, description } = req.body;
  const image = req.file?.filename;

  if (!image) {
    return res.status(400).json({ message: "Image is required" });
  }

  try {
    const newProject = await Project.create({ title, description, image });
    res.status(201).json({ message: "Project created", project: newProject });
  } catch (err) {
    res.status(500).json({ message: "Error saving project", error: err.message });
  }
});

module.exports = router;
