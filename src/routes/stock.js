const express = require("express");
const stockSchema = require("../models/stock");

const router = express.Router();

// create stock
router.post('/stock', (req, res) => {
  const stock = stockSchema(req.body);
  stock
  .save()
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}));
});


// get all stock
router.get('/stock', (req, res) => {
    stockSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
  });

  // get stock
router.get('/stock/:id', (req, res) => {
  const{id} =req.params;
  stockSchema
  .findById(id)
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}));
});

// update stock
router.put('/stock/:id', (req, res) => {
  const{id} =req.params;
  const { name, age, email } = req.body;
  stockSchema
  .updateOne({_id: id}, { $set: {name, age, email}})
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}));
});


// DELETE stock
router.delete('/stock/:id', (req, res) => {
  const{ id } =req.params;
  userSchema
  .remove({ _id: id })
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}));
});

module.exports = router;