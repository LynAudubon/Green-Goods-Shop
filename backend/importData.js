require('dotenv').config();

const productData = require('./data/products');
const Product = require('./models/ProductSchema')
const connectDB = require('./config/db');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});//deletes all documents in the collection named "products"(plural and lowercase of constructor Product) in the database
        await Product.insertMany(productData);
        console.log("Data import SUCCESS");

    } catch (error) {
        console.log("Data import FAILURE", error);
    }
};

importData();