const mongoose = require("mongoose");
const proveedoresSchema = mongoose.Schema({

nombre: {
    type: String, 
    required: true
},
telefono: {
    type: Number,
    required: true
},
direccion: {
    type: String,
    required: true
},
categoria: {
    type: String,
    required: true
}
}
);
module.exports = mongoose.model('proveedores', proveedoresSchema);