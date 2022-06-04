import React from 'react';
import './Product.css';
import { Link }  from 'react-router-dom';

const Product = ({ imageUrl, name, price, productId }) => {
        return (
        <div className='product'>
            <img src={imageUrl} alt={name} className='img'/>
            <div>
                <p className='info_name'>{name}</p>
                </div>
                <div className='info_price'><p>Price: ${price}</p>
                <Link to={`/product/${productId}`} className="info_button">Details</Link>
            </div>
        </div>
    );
};

export default Product;
