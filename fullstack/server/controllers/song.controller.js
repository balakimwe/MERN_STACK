const Song = require("../models/song.model");

//Creat
module.exports.addSong = (req, res) => {
  const newSong = req.body;
  Song.create(newSong)
    .then((song) => res.json(song))
    .catch((err) => res.status(400).json(err));
};

//Read all
module.exports.allSongs = (req, res) => {
  Song.find()
    .then((songs) => res.json(songs))
    .catch((err) => res.json(err));
};

//Read one
module.exports.oneSong = (req, res) => {
  const idFromParams = req.params.id;
  Song.findOne({ _id: idFromParams })
    .then((onesong) => res.json(onesong))
    .catch((err) => res.json(err));
};

//Update
module.exports.updateSong = (req, res) => {
  const idFromParams = req.params.id;
  const updatedValue = req.body;
  //Update: Criteria, Updated Value, Options
  Song.findOneAndUpdate({ _id: idFromParams }, updatedValue, {
    new: true, runValidators: true,})
    .then((updatedsong) => res.json(updatedsong))
    .catch((err) => res.status(400).json(err));
};

//Delete
module.exports.deleteSong = (req, res) => {
  const idFromParams = req.params.id;
  Song.deleteOne({ _id: idFromParams })
    .then((message) => res.json(message))
    .catch((err) => res.json(err));
};
