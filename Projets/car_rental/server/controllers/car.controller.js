const Car = require("../models/car.model");

//Creat
module.exports.addCar = (req, res) => {
  const newCar = req.body;
  Car.create(newCar)
    .then((car) => res.json(car))
    .catch((err) => res.status(400).json(err));
};

//Read all
module.exports.allCars = (req, res) => {
  Car.find()
    .then((cars) => res.json(cars))
    .catch((err) => res.json(err));
};

//Read one
module.exports.oneCar = (req, res) => {
  const idFromParams = req.params.id;
  Car.findOne({ _id: idFromParams })
    .then((onecar) => res.json(onecar))
    .catch((err) => res.json(err));
};

//Update
module.exports.updateCar = (req, res) => {
  const idFromParams = req.params.id;
  const updatedValue = req.body;
  //Update: Criteria, Updated Value, Options
  Car.findOneAndUpdate({ _id: idFromParams }, updatedValue, {
    new: true, runValidators: true,})
    .then((updatedcar) => res.json(updatedcar))
    .catch((err) => res.status(400).json(err));
};

//Delete
module.exports.deleteCar = (req, res) => {
  const idFromParams = req.params.id;
  Car.deleteOne({ _id: idFromParams })
    .then((message) => res.json(message))
    .catch((err) => res.json(err));
};
