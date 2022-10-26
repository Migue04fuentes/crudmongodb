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
    const newNote = new Note({ title, description });
    await newNote.save();  //Guardar objeto en mongodb
    req.flash('success_msg', 'Note Added Successfully'); //Guarda  tan solo el mensaje en el servidor
    res.redirect('/notes');
};

//Renderizar note
notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find().lean();               //buscar todos los datos que están en una colencción
    res.render('notes/all-notes', { notes });
};

//Mostrar las notas
notesCtrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    res.render('notes/edit-note', { note })
};

// Actualizar note
notesCtrl.updateNote = async(req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash('success_msg', 'Note Updated Successfully');
    res.redirect('/notes');
};

// Eliminar notas
notesCtrl.deletenote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Deleted Successfully');
    res.redirect('/notes');
};


module.exports = notesCtrl;