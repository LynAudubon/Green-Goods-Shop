import React from 'react';
import { Link } from 'react-router-dom'
import './CartItem.css';

const CartItem = () => {
    return (
        <div className='cartitem'>
            <div className='cartitem-image'>
                <img src='https://images.unsplash.com/photo-1615213612138-4d1195b1c0e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80' alt='pic'/>
            </div>

            <Link to={`/product/${11}`} className='cartitem-name'>
                <p>Product 11</p>
            </Link>

            <p className='cartitem-price'>$30.99</p>

            <select name='id' className='cartitem-select'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select>

            <button className='cartitem-deleteBtn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CartItem;