const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    price: {
        type: String, 
        required: true
    },
    numberInStock: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('product', productSchema);//Product constructor is capitalized, it is equal to "products" the name of the collection in the database which consist of documents(objects patterning off productSchema; an instance of the model)
module.exports = Product;

//Alternatively:
// module.exports = new mongoose.model('product', productSchema);