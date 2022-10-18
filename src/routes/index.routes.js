const {Router} = require('express');  //se accede a una propiedad de express llamada router
const router = Router();    // Se ejecuta el objero y se guarda en una variable

// Llamado al archivo controler
const {renderIndex, renderAbout } = require('../controllers/index.controller');

// Renderize a index cuando se lo pida la ruta inicial
router.get('/', renderIndex);

router.get('/about', renderAbout);


module.exports = router;   //Exportación
