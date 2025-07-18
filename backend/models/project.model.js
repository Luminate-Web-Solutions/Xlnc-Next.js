// backend/models/project.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Project = sequelize.define("Project", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM("commercial", "industrial", "hospital", "government", "residential"),
    allowNull: false,
  },
});

module.exports = Project;
