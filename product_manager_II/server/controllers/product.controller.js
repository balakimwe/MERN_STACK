const Product = require("../models/product.model");

//Creat
module.exports.addProduct = (req, res) => {
  const newProduct = req.body;
  Product.create(newProduct)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
};

//Read all
module.exports.allProducts = (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
};

//Read one
module.exports.oneProduct = (req, res) => {
  const idFromParams = req.params.id;
  Product.findOne({ _id: idFromParams })
    .then((oneproduct) => res.json(oneproduct))
    .catch((err) => res.json(err));
};

//Update
module.exports.updateProduct = (req, res) => {
  const idFromParams = req.params.id;
  const updatedValue = req.body;
  //Update: Criteria, Updated Value, Options
  Product.findOneAndUpdate({ _id: idFromParams }, updatedValue, {
    new: true, runValidators: true,})
    .then((updatedproduct) => res.json(updatedproduct))
    .catch((err) => res.status(400).json(err));
};

//Delete
module.exports.deleteProduct = (req, res) => {
  const idFromParams = req.params.id;
  Product.deleteOne({ _id: idFromParams })
    .then((message) => res.json(message))
    .catch((err) => res.json(err));
};
