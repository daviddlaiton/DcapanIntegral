const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Client = require('../models/clientModel.js');
const jwt = require('jsonwebtoken');
const Pedido = require('../models/pedidoModel.js');

//Authorization
router.use(function(req, res, next){
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    let superSecret = 'webDevUniandesSuperSecret';

    if(token){
        jwt.verify(token, superSecret, function(err, decoded){
            console.log(decoded.admin);
            if(err){
                return res.status(403).send({
                    success: false,
                    message: 'Invalid Token'
                });
            }
            else{
                if(decoded.admin === false){
                    return res.status(403).send({
                        success: false,
                        message: 'Unauthorized'
                    });
                }
                else{
                    req.decoded = decoded;
                    console.log(req.decoded);
                    next();
                }
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


//Get all clients
router.get('/clients', (req, res, next)=>{
    Client.find()
    .populate("pedidos")
    .exec()
    .then(docs => {
        if(docs === undefined || docs === null){
            res.status(404).json({
                message: "Client not found"
            });

        }
        else{
            let options = {
                path: 'pedidos.productos',
                model: 'Producto'
            }
            mongoose.model('Client').populate(docs, options, (err, pop)=>{
                res.status(200).send({
                    pop
                });
            });
        }
    })
    .catch(err =>{
        console.log(err);
    });
});

router.get('/pedidos', (req, res ,next) =>{
    Pedido.find()
    .populate('productos')
    .exec()
    .then(docs =>{
        res.status(200).json(docs);

    });
});





module.exports = router;