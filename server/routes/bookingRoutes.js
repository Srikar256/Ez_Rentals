const express = require("express");
const { createBooking, getMyBookings } = require("../controllers/bookingController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Create booking (protected)
router.post("/", protect, createBooking);

// Get logged-in user's bookings
router.get("/my", protect, getMyBookings);

module.exports = router;
