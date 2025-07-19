const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');


const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }, // validates email format
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'), // restrict role to admin or user
    defaultValue: 'user',
  },
});

module.exports = User;
