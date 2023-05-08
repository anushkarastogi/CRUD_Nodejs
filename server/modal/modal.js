const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    age: Number,
    phone: String,
    experience: Number,
    department: String,
    salary: Number
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;