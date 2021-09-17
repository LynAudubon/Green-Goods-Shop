import React, {Component} from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbarlogo'> 
                <h3> Green Goods.</h3> 
            </div>
            <ul className='navbarlinks'>
                <li>
                   <Link to="/cart">
                   <i className="fas fa-shopping-cart"></i>
                   <span className='cartdisplay'>0</span>
                   </Link> 
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;