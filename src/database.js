// Tendrá la conexión de la base de datos.

const mongoose = require('mongoose')   //lo que se requiere del módulo mongoose


const MONGODB_URI = "mongodb://"+notes-app_host+"/"+notes-app;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err + 'este es el error:'))