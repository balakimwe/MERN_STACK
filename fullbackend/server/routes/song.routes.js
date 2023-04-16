const SongController = require("../controllers/song.controllers");

module.exports = (app) => {
  //Create
  app.post("/api/songs/new", SongController.addSong);

  //Read One
  app.get("/api/songs/:id", SongController.oneSong);

  //Read All
  app.get("/api/songs", SongController.allSongs);

  //Update
  app.put("/api/songs/update/:id", SongController.updateSong);

  //Delete
  app.delete("/api/songs/delete/:id", SongController.deleteSong);
};
