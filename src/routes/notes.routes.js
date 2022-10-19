const { Router } = require('express');
const router = Router();

// FUNCIONES.  Se importan el archivo notes.controller que se encuentran en la carpeta controler
const {
    renderNoteForm, crearNewNote,
    renderNotes, renderEditForm,
    updateNote, deletenote
} = require('../controllers/notes.controller');

// se crea ruta
router.get('/notes/add', renderNoteForm);
//new note
router.post('/notes/new-note', crearNewNote);


//get all note
router.get('/notes', renderNotes);

//Edit notes  mostrar los formularios
router.get('/notes/edit/:id', renderEditForm);

//Actualizar los datos
router.put('/notes/edit/:id', updateNote);

//Delete note
router.delete('/notes/delete/:id', deletenote);


module.exports = router;

// NOTA:  get es para obtener datos o algo del servidor.  perdir
//  post: recibe datos del servidor y el servidor recibe algo. recibir. Crear algo nuevo
// put: para actualizar algo que ya existe