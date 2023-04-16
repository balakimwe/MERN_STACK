const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "title is required"],
    minlength: [1, "Title must have at least 1 character"]
  },
  joke: {
    type: String,
    require: [true, "Joke is required"],
    minlength: [1, "Joke must be at least 1 character long"]
  },
}, {timestamps: true});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
