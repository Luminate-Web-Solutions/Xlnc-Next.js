const Project = require("../models/project.model");

// ✅ Create Project
exports.uploadProject = async (req, res) => {
  try {
    const { title, description, popupDesc, category } = req.body;
    const image = req.file?.filename;

    if (!title || !description || !popupDesc || !category || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProject = await Project.create({
      title,
      description,
      popupDesc,
      category,
      image,
    });

    res.status(201).json({ message: "Project uploaded", project: newProject });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Server Error", detail: err.message });
  }
};

// ✅ Get All Projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

// ✅ Delete Project
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    await project.destroy();
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Server Error", detail: err.message });
  }
};

// ✅ Update Project
exports.updateProject = async (req, res) => {
  try {
    const { title, description, popupDesc, category } = req.body;
    const image = req.file?.filename;

    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    await project.update({
      title: title || project.title,
      description: description || project.description,
      popupDesc: popupDesc || project.popupDesc,
      category: category || project.category,
      image: image || project.image,
    });

    res.status(200).json({ message: "Project updated successfully", project });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: "Server Error", detail: err.message });
  }
};
