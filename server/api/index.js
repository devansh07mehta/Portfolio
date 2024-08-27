const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        process.env.FRONTEND_URL,
        "http://localhost:5173",
      ];
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

const port = 4000;

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  debug: true, // Enable debug mode
});

app.use(bodyParser.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the contact form API!");
});

app.get("/api/submit", (req, res) => {
  res.send("Welcome to the contact form API SUBMIT PAGE!");
});

// API route for contact form submission
app.post("/api/submit", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Email to user
    const userMailOptions = {
      from: `"${process.env.DISPLAY_NAME}" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting me!",
      text: `Hi ${name},\n\nThank you for reaching out. We have received your message and will get back to you soon.\n\nYour message: ${message}`,
    };

    // Email to admin (you)
    const adminMailOptions = {
      from: `"${process.env.DISPLAY_NAME}" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new message from the contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send emails in parallel without wrapping in new Promise
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    // Send response immediately
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error in email sending process:", error);
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
