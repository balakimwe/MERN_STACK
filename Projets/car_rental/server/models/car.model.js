const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: [true, "Make is required"],
      minlength: [2, "Title must be 2 character long"],
    },
    model: {
      type: String,
      required: [true, "Model is required"],
      minlength: [2, "Title must be 2 character long"],
    },
    mileage: {
      type: Number,
      min: [0, "Mileage no less than 0"],
      max: [300000, "Mileage no greater than 300000"],
    },
    year: {
      type: Number,
      min: [2000, "Year need to be greater than 1999"],
      max: [2024, "Year no greater than 2024"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", CarSchema);
