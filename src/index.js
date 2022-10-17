// Archivo principal para arrancar la aplicación

// Importación de archivos
const app = require('./server')

require('./database');

app.listen(app.get('port'), () => {
    console.log('server on port:', app.get('port'));
})