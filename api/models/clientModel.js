const mongoose = require('mongoose');
const clientSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: String,
    password: String,
    correo: String,
    login: String,
    admin: Boolean
});

module.exports = mongoose.model('Client', clientSchema);