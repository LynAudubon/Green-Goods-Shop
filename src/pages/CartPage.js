import React from 'react';
import './CartPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';


const CartPage = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getSubTotal = () => {
        return cartItems.reduce((subtotal, item) => (item.price * item.qty) + subtotal, 0);
    };


    return (
        <div className='cartpage'>
            <div className='cartpage-left'>
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to='/'>Return to Shopping</Link>
                    </div>
                ) : cartItems.map((item) => <CartItem key={item.product} item={item} qtyHandler={qtyHandler} removeFromCart={removeHandler}/>)
                }
            </div>
            <div className='cartpage-right'>
                <div className='cartpage-info'>
                    <p>Subtotal ({getCartCount()}) items</p>
                     <p>{getSubTotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
};

export default CartPage;
