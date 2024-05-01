const mongoose = require("mongoose");

const stockSchema = mongoose.Schema({
IP: {
    type: Number, 
    required: true
},
Nombredelproducto: {
    type: String,
    required: true
},
existencias: {
    type: Number,
    required: true
},
categoria: {
    type: String,
    required: true,
precio: {
    type:Number,
    required: true
}
}
}
);
module.exports = mongoose.model('stock', stockSchema);