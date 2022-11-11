const express = require('express');
const datafull = require('../data.json');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/products', (req, res) => {
    res.send(datafull.products);
})

app.get('/api/products/slug/:slug', (req, res) => {
    const product = datafull.products.find((x) => x.slug === req.params.slug);
    console.log(product);
    if(product) {
        res.send(product);
    }
    else
    {
        res.status(404).send({message: 'Producto no encontrado'});
    }
});

app.get('/api/products/:id', (req, res) => {
    const product = datafull.products.find((x) => x._id === req.params.id);
    console.log(product);
    if(product) {
        res.send(product);
    }
    else
    {
        res.status(404).send({message: 'Producto no encontrado'});
    }
});

//Configuraciones
app.set('port', process.env.PORT || 5000)

//Middlewares


//Routes

module.exports = app;