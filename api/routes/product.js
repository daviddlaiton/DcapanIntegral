const express = require('express');
const router = express.Router();

const Client = require('../models/clientModel.js');

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'ok'
    }); 
});

module.exports = router;