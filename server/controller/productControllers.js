const Product = require('../models/ProductSchema');
// import { ObjectId } from 'mongodb';

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
};

const getProductById = async (req, res) => {
    console.log('reqID', req.params.id)
    //   const id = new ObjectId(req.params.id);
        try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
};

module.exports = {
    getAllProducts, 
    getProductById
};