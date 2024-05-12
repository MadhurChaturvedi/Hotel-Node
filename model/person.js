const mongoose = require('mongoose');


const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    work: {
        type: String,
        enum: ['Chef', 'water', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
        required: true
    }
})


const Person = mongoose.model('Person', PersonSchema)
module.exports = Person;