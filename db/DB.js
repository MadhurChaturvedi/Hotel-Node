const mongoose = require('mongoose')

const mongooseURL = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongooseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('Connected', () => {
    console.log('Connected to mongoDB server!');
})

db.on('error', (err) => {
    console.log('Connected to mongoDB server!', err);
})

db.on('disconnected', () => {
    console.log('Connected to mongoDB server!');
})



module.exports = db;