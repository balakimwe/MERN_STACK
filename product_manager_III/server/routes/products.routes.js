const productController = require(`../controllers/product.controller`);

module.exports = (app) => {
  //Create
  app.post("/api/products/new", productController.addProduct);

  //Read all
  app.get("/api/products", productController.allProducts);

  //Read one
  app.get("/api/product/:id", productController.oneProduct);

  //Update one
  app.put("/api/product/:id", productController.updateProduct);

  //Delete one
  app.delete("/api/product/:id", productController.deleteProduct);
};
