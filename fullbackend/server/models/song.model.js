const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title must be 3 characters long"],
    },
    artist: {
      type: String,
      required: [true, "Artist is required"],
      minlength: [2, "Title must be 3 characters long"],
    },
    rating: {
      type: Number,
      min: [0, "Rating must be positive"],
      max: [10, "No more than 10 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Song", SongSchema);
