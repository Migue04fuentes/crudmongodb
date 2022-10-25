const router = require("../routes/notes.routes");

const Note = require('../models/Note');  //Se llama el modelo de datos como se guardaran


// objeto que tendrá todos las funciones de este controlador
const notesCtrl = {};

// renderización a la petición de un formulario
notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

//Create notes
notesCtrl.crearNewNote = async (req, res) => {
    const { title, description } = req.body;    
    const newNote = new Note({title, description});
    await newNote.save();  //Guardar objeto en mongodb
    res.redirect('/notes');
};

//Renderizar note
notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find().lean();               //buscar todos los datos que están en una colencción
    res.render('notes/all-notes', { notes });
};

//Mostrar las notas
notesCtrl.renderEditForm = (req, res) => {
    res.send('render edit form');
};

// Actualizar note
notesCtrl.updateNote = (req, res) => {
    res.send('Update note');
};

// Eliminar notas
notesCtrl.deletenote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.redirect('/notes');
};


module.exports = notesCtrl;