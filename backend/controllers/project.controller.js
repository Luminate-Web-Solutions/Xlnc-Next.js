const Project = require("../models/project.model");

exports.uploadProject = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const image = req.file?.filename;

    if (!title || !description || !category || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProject = await Project.create({
      title,
      description,
      category,
      image,
    });

    res.status(201).json({ message: "Project uploaded", project: newProject });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Server Error", detail: err.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};
