import React, {Component} from 'react';
import './HomePage.css';

import Product from '../components/Product';

const HomePage = () => {
    return (
        <div className='homepage'>
            <h2 className='homepage_title'>
                Latest Products
            </h2>
             <div className='homepage_products'>
                <Product />
            </div>
        </div>
    );
};

export default HomePage;
