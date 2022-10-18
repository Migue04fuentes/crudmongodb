//para crear variables de entorno. lee los archivos .env al inicio de nuestro proytect
require('dotenv').config();  

// Importación de archivos
const app = require('./server')

require('./database');  //llamado al archivo database

//objeto que tiene acceso al sistema

app.listen(app.get('port'), () => {
    console.log('server on port:', app.get('port'));
})