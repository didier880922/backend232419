require('dotenv').config();
const { faker } = require('@faker-js/faker');

const app = require('./app');
require('./database');

app.get('/', (req, res) => {
    res.send('Hola mi server esta en express!!!')
});

app.get('/nueva-ruta', (req, res) => {
    res.send('Esto es una nueva ruta...')

})

app.get('/categories', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Categoria 1'
        }, {
            id: 2,
            name: 'Categoria 2'
        }, {
            id: 3,
            name: 'Categoria 3'
        }
    ])
});

app.get('/categories/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id, 
        id: 3,
        name: 'Categoria 3'
    })
})

app.get('/users', (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({
            limit,
            offset
        });

    } else {
        res.send('No llegaron los parametros');
    }
});

app.get('/products', (req, res) => {
    const products = [];
    const { size } = req.query;
    const limit = size || 5;
    for (let index = 0; index < limit; index++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
        });
    }
    res.json(products); 
});

//Promesa para correr mi servidor
async function main() {
    await app.listen(app.get('port'));
    console.log('Served run port ' + app.get('port'))
}

main();