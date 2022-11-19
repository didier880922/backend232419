const express = require('express');
const Product = require('../models/productModel.js');

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

productRouter.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({slug: req.params.slug});
  if (product) {
    res.send(product);
  }
  else {
    res.status(404).send({ message: 'Producto no encontrado'});
  }
});

productRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  }
  else {
    res.status(404).send({ message: 'Producto no encontrado'});
  }
});

productRouter.post('/create', async (req, res) => {
    try {
        const { name, slug, category, image, price, countInStock, brand, rating, numReviews, description } = req.body
        await Product.create({name, slug, category, image, price, countInStock, brand, rating, numReviews, description})
        return res.json({name, slug, category, image, price, countInStock, brand, rating, numReviews, description})
    } catch {
        return res.status(404)
    }
});

module.exports = productRouter;