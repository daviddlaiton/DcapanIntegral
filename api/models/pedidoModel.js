const mongoose = require('mongoose');
const pedidoSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    fecha: String,
    productos: [{type: mongoose.Schema.ObjectId,ref: "Producto", required: true}]
});

module.exports = mongoose.model('Pedido', pedidoSchema);