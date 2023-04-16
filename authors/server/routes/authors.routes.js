const authorController = require(`../controllers/author.controller`);

module.exports = (app) => {
  //Create
  app.post("/api/authors/new", authorController.addAuthor);

  //Read all
  app.get("/api/authors", authorController.allAuthors);

  //Read one
  app.get("/api/author/:id", authorController.oneAuthor);

  //Update one
  app.put("/api/author/:id", authorController.updateAuthor);

  //Delete one
  app.delete("/api/author/:id", authorController.deleteAuthor);
};
