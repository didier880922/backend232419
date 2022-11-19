const express = require('express');
const Product = require('../models/productModel.js');

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
    const createProducts = await Product.find();
    res.json({ createProducts });
});

module.exports = seedRouter;

