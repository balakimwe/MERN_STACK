const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [5, "Title must be 5 character long"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Must have a positive digit"],
      max: [10000, "No more than 10000"],
    },
    description: {
      type: String,
      requiered: [true, "Description is required"],
      minlength: [6, "Descripion must be at least 6 characters long"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
