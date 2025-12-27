const Booking = require("../models/Booking");
const Vehicle = require("../models/Vehicle");

// CREATE BOOKING
exports.createBooking = async (req, res) => {
  try {
    const { vehicleId, pickupDate, dropDate } = req.body;

    // Find vehicle
    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle || !vehicle.available) {
      return res.status(400).json({ message: "Vehicle not available" });
    }

    // Calculate days
    const pickup = new Date(pickupDate);
    const drop = new Date(dropDate);
    const days =
      (drop.getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24);

    if (days <= 0) {
      return res.status(400).json({ message: "Invalid booking dates" });
    }

    const totalAmount = days * vehicle.pricePerDay;

    const booking = await Booking.create({
      user: req.user,
      vehicle: vehicle._id,
      pickupDate: pickup,
      dropDate: drop,
      totalAmount,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER BOOKINGS
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user })
      .populate("vehicle", "model type pricePerDay image")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
