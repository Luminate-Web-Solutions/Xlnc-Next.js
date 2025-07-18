const Project = require("../models/project.model");

exports.uploadProject = async (req, res) => {
  try {
    const { title, desc } = req.body;
    const image = req.file.filename;

    const newProject = await Project.create({ title, desc, image });

    res.status(201).json({ message: "Project uploaded", project: newProject });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Server Error" });
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
