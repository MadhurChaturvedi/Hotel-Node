const mongoose = require('mongoose')
require('dotenv').config();

const PORT = process.env.DBURL
const localPORT  = process.env.local

mongoose.connect(PORT, {
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