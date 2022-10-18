// Obtendrá los datos de los usuarios

const { Schema, model } = require('mongoose');

// Encriptar los password
const bcrypt = require('bcryptjs');

// Esquema  de usuarios
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, requerid: true }
}, { timestamps: true });

// Cifrado de password
UserSchema.methods.encryPasword = async password => {
    const salt = await bcrypt.genSalt(10);  //veces que se ejecutará el algoritmo.
    // await para decir que es asíncrono y para que funcione la  palabra clave async de estar en la función

    // Generar cifrado
    return await bcrypt.hash(password, salt);
}


// Método para comparar contraseñas cifradas
UserSchema.methods.matchPassword  = function(password){
  return  bcrypt.compare(password, this.password);
}


// Exportación al model
module.exports = model('User', UserSchema);