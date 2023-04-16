const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [5, "Title must be 5 character long"],
    },
    artist: {
      type: String,
      required: [true, "Artist is required"],
      minlength: [3, "Title must be 3 character long"],
    },
    rating: {
      type: Number,
      min: [1, "Rating needs to be 1 - 10"],
      max: [10, "Rating needs to be 1 - 10"],
    },
    top50: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Song", SongSchema);
