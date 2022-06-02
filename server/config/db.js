require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true, 
            useNewUrlParser: true 
        });
        console.log('MongoDB connection SUCCESS')
    } catch(error) {
        console.log('MongoDB connection FAILURE', error);
    }
};

module.exports = connectDB;
