const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripulanteSchema = new Schema({
    nombre: String,
    edad: String,
    email: String
})

const Tripulante = mongoose.model('Tripulante',tripulanteSchema);
module.exports = Tripulante;