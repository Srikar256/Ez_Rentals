const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["sedan", "suv", "hatchback"],
      required: true,
    },
    pricePerDay: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
