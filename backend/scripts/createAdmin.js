const bcrypt = require("bcryptjs");
const sequelize = require("../config/db.config");
const User = require("../models/user.model");

async function createAdmin() {
  try {
    await sequelize.sync();

    const existing = await User.findOne({ where: { email: "admin@xlnc.com" } });
    if (existing) {
      console.log("Admin user already exists");
      return;
    }

    const passwordHash = await bcrypt.hash("xlnc@123", 10);
    const user = await User.create({
      email: "admin@xlnc.com",
      passwordHash,
      role: "admin",
    });

    console.log("✅ Admin user created:", user.email);
  } catch (err) {
    console.error("❌ Error creating user:", err);
  } finally {
    await sequelize.close();
  }
}

createAdmin();
