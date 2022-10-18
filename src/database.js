// Tendrá la conexión de la base de datos.

const mongoose = require('mongoose')   //lo que se requiere del módulo mongoose

// url de la base de datos con variables de entorno
const {NOTES_APP_MONGODB_HOST , NOTES_APP_MONGODB_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err + 'este es el error:'))