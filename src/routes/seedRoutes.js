const express = require('express');
const Product = require('../models/productModel.js');

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
    const createProducts = await Product.find();
    res.json({ createProducts });
})

seedRouter.post('/create', async (req, res) => {
    try {
        const { name, slug, category, image, price, countInStock, brand, rating, numReviews, description } = req.body
        await Product.create(name, slug, category, image, price, countInStock, brand, rating, numReviews, description)
        return res.json({name, slug, category, image, price, countInStock, brand, rating, numReviews, description})
    } catch {
        return res.status(404)
    }
})
module.exports = seedRouter;

