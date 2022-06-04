const express = require('express');
const router = express.Router(); 

const {
    getAllProducts, 
    getProductById
} = require('../controller/productControllers');


router.get('/:id', getProductById);

router.get('/', getAllProducts);


module.exports = router;