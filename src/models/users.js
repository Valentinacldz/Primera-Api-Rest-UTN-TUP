const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
nombre: {
    type: String, 
    required: true
},
edad: {
    type:Number,
    required: true
},
email: {
    type: String,
    required: true
},
cuentadeposito: {
    type: Number,
    required: true
},
cuit: {
    type: Number,
    required: true
}
}
);
module.exports = mongoose.model('User', userSchema);