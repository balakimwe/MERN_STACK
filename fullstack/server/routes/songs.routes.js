const songController = require(`../controllers/song.controller`);

module.exports = (app) => {
  //Create
  app.post("/api/songs/new", songController.addSong);

  //Read all
  app.get("/api/songs", songController.allSongs);

  //Read one
  app.get("/api/song/:id", songController.oneSong);

  //Update one
  app.put("/api/song/:id", songController.updateSong);

  //Delete one
  app.delete("/api/song/:id", songController.deleteSong);
};
