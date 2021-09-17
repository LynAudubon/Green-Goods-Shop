const Product = require('../models/ProductSchema');

const getProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
};

const getProductById = async(req, res) => {
    //req.params.id
    // req
    //req.body 
    try {
        const products = await Product.findById(req.params.id);
        

        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server Error"});
    }
};

module.exports = {
    getProducts, 
    getProductById
};