import React, {Component} from 'react';
import './ProductPage.css';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { getProductDetails } from '../redux/actions/productActions';


const ProductPage = ({match, history}) => {
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);

    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product_id) {
           dispatch(getProductDetails(match.params.id))
       }
    }, [dispatch, product, match]);

    return (
        <div className='productpage'>
            {loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : (
                <>
                <div className="productpage__left">
                    <div className='left_image'>
                        <img
                            src={product.imageUrl} alt={product.name}
                        />
                    </div>  
                    <div className="left_info">
                        <p className="left_name">"{product. name}</p>
                        <p>Price: ${product.price}</p>
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="productpage__right">
                    <div className="right_info">
                        <p> Price: <span>${product.price} </span></p>
                        <p> Price: <span> {product.numberInStock > 0 ? "In Stock" : "Out of Stock"} </span></p>
                        <p>
                            <select>
                                <option value="1"></option>
                                <option value="2"></option>
                                <option value="3"></option>
                                <option value="4"></option>
                            </select>
                        </p>
                        <p>
                            <button type='button'>Add To Cart</button>
                        </p>
                    </div>
                </div>
                </>
            )}
        </div>
    )
};

export default ProductPage
