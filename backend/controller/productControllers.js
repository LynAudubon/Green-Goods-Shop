const Product = require('../models/ProductSchema');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
};

const getProductById = async (req, res) => {
    //req.params.id
    // req
    //req.body 
    try {
        const product = await Product.findById(req.params.id);
        

        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
};

module.exports = {
    getAllProducts, 
    getProductById
};