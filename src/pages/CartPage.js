import React, {Component} from 'react';
import './CartPage.css'
import CartItem from '../components/CartItem';

const CartPage = () => {
    return (
        <div className='cartpage'>
            <div className='cartpage-left'>
                <h2>Shopping Cart</h2>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className='cartpage-right'>
                <div className='cartpage-info'>
                    <p>Subtotal (0) items</p>
                     <p>$30.99</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
};

export default CartPage
