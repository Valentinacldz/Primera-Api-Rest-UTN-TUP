const express = require("express");
const proveedoreschema = require("../models/proveedores");

const router = express.Router();

// create user
router.post('/proveedores', (req, res) => {
  const user = proveedoreschema(req.body);
  user
  .save()
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}));
});


// get all proveedores
router.get('/proveedores', (req, res) => {
    proveedoreschema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
  });

  // get a proveedores
router.get('/proveedores/:id', (req, res) => {
  const{id} =req.params;
  proveedoreschema
  .findById(id)
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}));
});

// update a user
router.put('/proveedores/:id', (req, res) => {
  const{id} =req.params;
  const { name, age, email } = req.body;
  proveedoreschema
  .updateOne({_id: id}, { $set: {name, age, email}})
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}));
});


// DELETE a user
router.delete('/proveedores/:id', (req, res) => {
  const{ id } =req.params;
  proveedoreschema
  .remove({ _id: id })
  .then((data) => res.json(data))
  .catch((error) => res.json({message: error}));
});

module.exports = router;