const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Client = require('../models/clientModel.js');
const jwt = require('jsonwebtoken');
const Pedido = require('../models/pedidoModel.js');
const Producto = require('../models/productoModel.js');

router.use(function(req, res, next){
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    let superSecret = 'webDevUniandesSuperSecret';
    if(token){
        jwt.verify(token, superSecret, function(err, decoded){
            if(err){
                return res.status(403).send({
                    success: false,
                    message: 'Invalid Token'
                });
            }
            else{
                req.decoded = decoded;
                next();
            }
        });
    }
    else{
        return res.status(403).send({
            success: false,
            message: 'No token Provided'
        });
    }
});

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: "Oki Doki"
    });
});

router.post('/:clientId/pedidos', (req, res, next) =>{
    let pfecha = req.body.fecha;
    let pProductos = req.body.productos;
    let productosFormateados = [];
    let p;
    pProductos.map((data) =>{
        p = new Producto({
            _id: new mongoose.Types.ObjectId(),
            tipo: data.tipo,
            cantidad: data.cantidad
        });
        productosFormateados.push(p);
        p.save();
    });
    
    let ppedido = new Pedido({
        _id: new mongoose.Types.ObjectId(),
        fecha: pfecha,
        productos: productosFormateados
    
    });
    ppedido.save();
    console.log(ppedido);
    Client.update({_id: req.params.clientId}, {$push: {pedidos: ppedido}}).exec().then(doc =>{
        res.status(200).json({
            pedido: doc 
        });
    });
    

});


module.exports = router;
