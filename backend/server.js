require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');//why not require 'connectDB' which is exported from db.js file
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);//api???

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))