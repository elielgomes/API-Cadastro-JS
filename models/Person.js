const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
    name: String,
    email: String,
    phone: String,
    cep: String,
    number: String
})

module.exports = Person;