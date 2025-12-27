const Vehicle = require("../models/Vehicle");

// ADD VEHICLE (Admin / protected later)
exports.addVehicle = async (req, res) => {
  try {
    const { model, type, pricePerDay, image } = req.body;

    const vehicle = await Vehicle.create({
      model,
      type,
      pricePerDay,
      image,
    });

    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL VEHICLES (Public)
exports.getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
