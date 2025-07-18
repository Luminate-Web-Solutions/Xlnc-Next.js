const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Project = require("./models/project.model");
const sequelize = require("./config/db.config");

const authRoutes = require("./routes/auth.routes");
const projectRoutes = require("./routes/project.routes");
const contactRoutes = require("./routes/contact.routes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));


// in your main server.js or index.js

// sequelize.sync({ force: true }).then(() => {
//   console.log("Database & tables recreated!");
// });


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// DB + Server
// sequelize.sync({ force: true }).then(() => {
//   console.log("✅ Database connected");
  
// });
const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
