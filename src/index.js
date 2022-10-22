require('dotenv').config();

const app = require('./app');
require('./database');

//Promesa para correr mi servidor
async function main() {
    await app.listen(app.get('port'));
    console.log('Served run port ' + app.get('port'))
}

main();