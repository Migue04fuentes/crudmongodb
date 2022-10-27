// Requerir Router de express y alojarlo en una variable
const {Router} = require('express'); 
const router =  Router();

// importaciones de funciones del controlador
const {renderSignUpForms,
       renderSignInForms,
       signup, signin, logout} = require('../controllers/users.controller');

// Definición de rutas

router.get('/users/signup', renderSignUpForms);

router.post('/users/signup', signup);

router.get('/users/signin', renderSignInForms);

router.post('/users/signin', signin);

router.get('/users/logout', logout);

// Exportaciones
module.exports = router;