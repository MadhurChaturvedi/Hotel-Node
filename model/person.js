const mongoose = require('mongoose');
const bycrypt = require('bcrypt');

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
    },
    username: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
})

PersonSchema.pre('save', async function (next) {
    const person = this;

    if (!person.isModified('password')) return next();
    try {
        // hash password genertio    
        const salt = await bycrypt.genSalt(10);
        const hanshedPassword = await bycrypt.hash(person.password, salt);
        person.password = hanshedPassword;
        next()
    }
    catch (erro) {
        return next(erro)
    }
})

PersonSchema.methods.comparePassword = async function (candidatePassword){
    try{
     const isMatch = await bycrypt.compare(candidatePassword,this.password)
     return isMatch
    }catch(error){
        throw error
    }

}

const Person = mongoose.model('Person', PersonSchema)
module.exports = Person;