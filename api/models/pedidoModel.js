const mongoose = require('mongoose');
const pedidoSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    fechaPedido: String,
    fechaEntrega: String,
    direccion: String,
    productos: [{type: mongoose.Schema.ObjectId,ref: "Producto", required: true}]
});

module.exports = mongoose.model('Pedido', pedidoSchema);