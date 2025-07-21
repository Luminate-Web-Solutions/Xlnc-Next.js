const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const sequelize = require("./config/db.config");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Import Routes
const authRoutes = require("./routes/auth.routes");
const projectRoutes = require("./routes/project.routes");
const contactRoutes = require("./routes/contact.routes");
const blogRoutes = require("./routes/blog.routes");

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/blogs", blogRoutes);
// Environment logging (only in dev mode)
if (process.env.NODE_ENV !== "production") {
  console.log("🌍 Environment:", process.env.NODE_ENV || "development");
  console.log("📧 JWT_SECRET Loaded:", !!process.env.JWT_SECRET);
}

// Global error listener
process.on("unhandledRejection", (err) => {
  console.error("💥 Unhandled Rejection:", err.message);
});

// Start Server after DB Sync
sequelize
  .sync()
  .then(() => {
    console.log("✅ Database connected & synced");

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to sync database:", err.message);
  });
