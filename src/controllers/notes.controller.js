const router = require("../routes/notes.routes");

// objeto que tendrá todos las funciones de este controlador
const notesCtrl = {};

// renderización a la petición de un formulario
notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

//Create notes
notesCtrl.crearNewNote = (req, res) =>{
    console.log(req.body);
    res.send('new note');
};

//Renderizar note
notesCtrl.renderNotes = (req, res) => {
    res.send('render notes');
};

//Mostrar las notas
notesCtrl.renderEditForm = (req, res) =>{
   res.send('render edit form');
};

// Actualizar note
notesCtrl.updateNote = (req, res) =>{
    res.send('Update note');
};

// Eliminar notas
notesCtrl.deletenote = (req, res) =>{
    res.send('Delete Note');
};


module.exports = notesCtrl;