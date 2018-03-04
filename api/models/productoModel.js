const mongoose = require('mongoose');
productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tipo: String,
    cantidad: Number,
    precio: Number
});

module.exports = mongoose.model('Producto', productSchema);