const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Project = sequelize.define("Project", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT, // Short card description
    allowNull: false,
  },
  popupDesc: {
    type: DataTypes.TEXT, // Full popup description
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Project;
