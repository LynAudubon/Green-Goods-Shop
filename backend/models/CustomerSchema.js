const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({//uses mongoose Schema method to return a new instance of an object as defined by the customerSchema constructor need to be capitilized
    customer_name: {type: String, required: true},
    customer_id: {type: String, required: true},
    customer_address: {type: Number, required: true},
    customer_orders: {type: Array, required: true, default: []},
});

module.exports = new mongoose.model('Customer', customerSchema);//is the customerSchema constructor capitalized; note this is an object