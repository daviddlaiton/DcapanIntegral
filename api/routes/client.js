const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Client = require('../models/clientModel.js');
const jwt = require('jsonwebtoken');

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




module.exports = router;
