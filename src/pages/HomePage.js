import React, {Component} from 'react';
import './HomePage.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../redux/constants/productConstants';
import axios from 'axios';

import Product from '../components/Product';
import { getProducts as allProducts } from '../redux/actions/productActions';

const HomePage = () => {

    const dispatch = useDispatch();
    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect( async () => {
        console.log('UseEffect: rendering now')
        try {
            dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
    
            const { data } = await axios.get('http://localhost:5000/api/products'
            );
            console.log(data);
    
            dispatch({
                type: actionTypes.GET_PRODUCTS_SUCCESS,
                payload: data,
             });
            } catch (error) {
                    dispatch({
                    type: actionTypes.GET_PRODUCTS_FAIL,
                    payload: error.response && error.response.data.message ? error.response.data.message:error.message
                });
            }
    // allProducts();
    }, []);

    return (
        <div className='homepage'>
            <h2 className='homepage_title'>
                Latest Arrivals
            </h2>
             <div className='homepage_products'>
                 {!products ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : (products.map((product) => <Product 
                key={product._id} 
                productId={product._id}
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}
                 />)
                 )}
            </div>
        </div>
    );
};

export default HomePage;
