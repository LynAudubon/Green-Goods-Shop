import React, {Component} from 'react';
import './Product.css'
import {Link} from 'react-router-dom'

const Product = (imageUrl, name, price, description, productId) => {
    return (
        <div className='product'>
            <img src={imageUrl} alt={name}/>
        <div>
        <p className='info_name'>{name}</p>
        </div>
        <div className='product_info'>
            <p className='info_description'>{description.substring(0, 100)}...</p>
        </div>
        <div className='info_price'><p>Price: ${price}</p>
        <Link to={`/products/${productId}`} className="info_button">Details</Link>
        </div>
        </div>
    );
};

export default Product;
