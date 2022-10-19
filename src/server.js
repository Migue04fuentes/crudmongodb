// Tendrá el código del servidor ya que Express es el códdigo del servidor



const express = require('express');   // guardar lo se requiere del módulo express
const exphbs = require('express-handlebars'); //motor de plantillas
const path = require('path');
const morgan = require('morgan');  //Enlista la peticones que van llegando

// inicializaciones
// Ejecución del módulo express
const app = express();

// Sesión de configuracio/setting lo que quiero que haga express basado en algunos módulos
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));    //para establecer donde está la carpeta view.
app.engine('.hbs', exphbs.engine ({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname : '.hbs'
}))
app.set('view engine', '.hbs');   //Motor de las vistas


// Middlewares   Funciones que se van ejecutando a medidad que van llegano peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))   // le dice al servidor que convierta los datos en tipo jsosn


// Global Variables 

//Routes  Sesión de rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
//   Exportación de archivos
module.exports = app;