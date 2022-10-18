const { Schema, model } = require('mongoose');  //para definir lo que voy a guardar en mongodb; crear la clase para tener métodos y propiedades

const NoteSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }

    //para saber cuando fue creado o actualizado
    // createdAt:
    // updateAt:
}, {
    timestamps: true
})

module.exports = model('note', NoteSchema);