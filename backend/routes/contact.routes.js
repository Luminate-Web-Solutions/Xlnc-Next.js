const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Admin email
    const adminMailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      subject: `[XLNC Contact] ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Auto-reply to user
    const autoReplyOptions = {
      from: `"XLNC Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank you for contacting XLNC`,
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to XLNC. We have received your message and our team will get back to you shortly.</p>
        <hr>
        <p><strong>Your Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <br>
        <p>Best regards,<br>The XLNC Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(autoReplyOptions);

    console.log("✅ Admin & Auto-reply emails sent");
    res.status(200).json({ message: "Message sent and auto-reply delivered!" });

  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
});

module.exports = router;
