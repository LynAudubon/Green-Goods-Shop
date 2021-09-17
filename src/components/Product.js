import React, {Component} from 'react';
import './Product.css'
import {Link} from 'react-router-dom'

const Product = () => {
    return (
        <div className='product'>
            <img src='https://images.unsplash.com/photo-1615213612138-4d1195b1c0e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80' alt='\(Asplenium Nidus\)'/>
        <div>
        <p className='info_name'>
            "Bird's-nest Fern (Asplenium Nidus)"
        </p>
        </div>
        <div className='product_info'>
            <p className='info_description'>
            Asplenium nidus forms large simple fronds visually similar to banana leaves, with the fronds growing to 50–150 centimetres (20–59 in) long and 10–20 centimetres (3.9–7.9 in) broad. A. nidus belongs to the \"Neottopteris clade\" members of which generally have somewhat leathery leaf tissue. The fronds roll back as they brown and create a massive leaf nest in the branches and trunks of trees. Asplenium nidus is native to east tropical Africa (in Tanzania, inclusive of the Zanzibar Archipelago); temperate and tropical Asia (in Indonesia; East Timor; the prefecture of Kyushu, and the Ryukyu Islands of Japan; Malaysia; the Philippines; Taiwan; and Thailand); and in Australasia (in the northern part of Queensland in Australia).[8]  It thrives in warm, humid areas in partial to full shade. It dislikes direct sunlight and likes to be in full shade on the north facing garden wall.With a minimum temperature of 10 °C (50 °F), Asplenium nidus is widely cultivated in temperate regions as a houseplant.
            </p>
        </div>
        <div className='info_price'>
            <p> Price: $30.99</p>
            <Link className="info_button">Details</Link>
        </div>
        </div>
    )
};

export default Product;
