import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({click}) => {
    return (
        <nav className='navbar'>
            <div className='navbarlogo'>
                <Link to='/'>
                    <h3> Green Goods.</h3> 
                </Link>
            </div>
            <ul className='navbarlinks'>
                <li>
                    <Link to='/' className='plants'>Shop Plants</Link>
                </li>
                <li>
                    Sign-in
                </li>
                <li>
                   <Link to='/cart' className='cart_link'>
                   <i className='fas fa-shopping-cart'></i>
                   <span className='cartdisplay'>0</span>
                   </Link> 
                </li>
            </ul>
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default Navbar;