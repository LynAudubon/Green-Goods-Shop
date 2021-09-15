//purpose of config file???
require('dotenv').config();//is there a work around to requiring dotenv
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);// which options to include in the options object as optional second parameter?
        console.log('MongoDB connection SUCCESS')
    } catch(error) {
        console.log('MongoDB connection FAILURE', error);
    }
}

module.exports = connectDB;
