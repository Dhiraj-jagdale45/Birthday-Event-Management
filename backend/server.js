const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// ── Middleware ──────────────────────────────────────────────
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  }),
);
app.use(express.json());

// ── MongoDB Connection ──────────────────────────────────────
mongoose
  mongoose.connect('mongodb://127.0.0.1:27017/birthdayBooking')
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// ── Appointment Schema ──────────────────────────────────────
const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    date: { type: String, default: "" },
    eventType: { type: String, default: "" },
    message: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }, // adds createdAt + updatedAt automatically
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

// ── Routes ─────────────────────────────────────────────────

// POST /api/appointments — Save a new appointment
app.post("/api/appointments", async (req, res) => {
  try {
    const { name, email, phone, date, eventType, message } = req.body;

    // Basic validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email and phone are required.",
      });
    }

    const appointment = new Appointment({
      name,
      email,
      phone,
      date,
      eventType,
      message,
    });

    await appointment.save();

    console.log(`📅 New appointment from: ${name} (${email})`);

    return res.status(201).json({
      success: true,
      message: "Appointment booked successfully!",
      data: appointment,
    });
  } catch (error) {
    console.error("Error saving appointment:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

// Health check
app.get("/", (req, res) => {
  res.json({ message: "🎉 Birthday Bumps API is running!" });
});

// ── Start Server ────────────────────────────────────────────
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
