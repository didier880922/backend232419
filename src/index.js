require('dotenv').config();

const app = require('./app');
require('./database');

//Promesa para correr el servidor
async function main() {
    await app.listen(app.get('port'));
    console.log('Servidor corriendo en el puerto!!' + app.get('port'));
}

main();