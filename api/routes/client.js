const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Client = require('../models/clientModel.js');
const jwt = require('jsonwebtoken');
const Pedido = require('../models/pedidoModel.js');
const Producto = require('../models/productoModel.js');
const config = require("../../config");

router.use(function(req, res, next){
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    let superSecret = config.secret;
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
    let pfechaEntrega = req.body.fechaEntrega;
    let pfechaPedido = req.body.pfechaPedido;
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
        fechaEntrega: pfechaEntrega,
        fechaPedido: pfechaPedido,
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

router.get("/:clientId", (req, res, next)=>{
    let id = req.params.clientId;
    Client.findOne({_id: id})
    .populate("pedidos")
    .exec()
    .then(doc =>{
        if(doc === undefined || doc === null){
            res.status(404).json({
                message: "Client not found"
            });

        }
        else{
            let options = {
                path: 'pedidos.productos',
                model: 'Producto'
            }
            mongoose.model('Client').populate(doc, options, (err, pop)=>{
                res.status(200).send({
                    pop
                });
            });
        }

    });
});

router.put("/:clientId", (req, res, next)=>{
    let id = req.params.clientId;
    let pname = req.body.name;
    let ppassword = req.body.password;
    let pcorreo = req.body.correo;

    Client.findOneAndUpdate({_id: id}, {
        name:pname,
        password: ppassword,
        correo: pcorreo

    },{new: true})
    .exec()
    .then(doc =>{
        if(doc === null || doc === undefined){
            res.status(404).json({
                message: "Not Found"
            });
        }

        res.status(200).json({
            doc
        });
    });

});


module.exports = router;
