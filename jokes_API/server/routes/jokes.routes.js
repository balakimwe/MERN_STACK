const JokeController = require("../controllers/jokes.controllers.js");

module.exports = (app) => {

  app.get("/api/jokes", JokeController.findAllJokes);
  app.get("/api/jokes/random", JokeController.randomJoke)

  app.get("/api/jokes/:id", JokeController.findOneJoke);

  app.post("/api/jokes/new", JokeController.newJoke);
  
  app.put("/api/jokes/update/:id", JokeController.updateJoke);

  app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);

};
