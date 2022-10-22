const mongoose = require('mongoose');

//Cadena de conexión 
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/db_test' ;

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conexión a la base de datos con éxito!!!');
})

module.exports = connection;