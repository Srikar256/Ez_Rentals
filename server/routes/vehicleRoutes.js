const express = require("express");
const { addVehicle, getVehicles } = require("../controllers/vehicleController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Add vehicle (protected)
router.post("/", protect, addVehicle);

// Get all vehicles (public)
router.get("/", getVehicles);

module.exports = router;
