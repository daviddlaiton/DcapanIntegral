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
    .populate("productos")
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
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