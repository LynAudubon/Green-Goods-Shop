import React from 'react';
import { Link } from 'react-router-dom'
import './CartItem.css';

const CartItem = ({ item, qtyHandler, removeHandler }) => {
    return (
        <div className='cartitem'>
            <div className='cartitem-image'>
                <img src={item.imageUrl} alt={item.name}/>
            </div>

            <Link to={`/product/${item.product}`} className='cartitem-name'>
                <p>{item.name}</p>
            </Link>

            <p className='cartitem-price'>${item.price}</p>

            <select name='id' className='cartitem-select' value={item.qty} onChange={() => qtyHandler(item.product, e.target.value)}>
             {[...Array(item.numberInStock).keys()].map(x => {
                return <option key={x + 1}>{x + 1}</option>
                })}    
            </select>
            <button className='cartitem-deleteBtn' onClick={() => removeHandler(item.product)}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CartItem;