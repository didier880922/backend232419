const express = require('express');
const cors = require('cors');
const datafull = require('../data.json');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/api/products', (req, res) => {
    res.send(datafull.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
  const product = datafull.products.find((x) => x.slug === req.params.slug);
  //console.log(product);
  if (product) {
    res.send(product);
  }
  else {
    res.status(404).send({ message: 'Producto no encontrado'});
  }
});

app.get('/api/products/:id', (req, res) => {
  const product = datafull.products.find((x) => x._id === req.params.id);
  //console.log(product);
  if (product) {
    res.send(product);
  }
  else {
    res.status(404).send({ message: 'Producto no encontrado'});
  }
});

// Configuraciones
app.set('port', process.env.PORT || 4500);

// Middlewares
app.use(cors());
app.use(express.json());

// routes

module.exports = app;