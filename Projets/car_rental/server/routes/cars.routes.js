const carController = require(`../controllers/car.controller`);

module.exports = (app) => {
  //Create
  app.post("/api/cars/new", carController.addCar);

  //Read all
  app.get("/api/cars", carController.allCars);

  //Read one
  app.get("/api/car/:id", carController.oneCar);

  //Update one
  app.put("/api/car/:id", carController.updateCar);

  //Delete one
  app.delete("/api/car/:id", carController.deleteCar);
};
