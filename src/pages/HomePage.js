import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HomePage.css';

//Components
import Product from '../components/Product';
//Actions
import { getProducts as allProducts } from '../redux/actions/productActions';

const HomePage = () => {
    const dispatch = useDispatch();
    const listProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = listProducts;
    console.log('products', products)

    useEffect(() => {
        dispatch(allProducts());
    }, [dispatch]);

    return (
        <div className='homepage'>
            <h2 className='homepage_title'>
                Latest Arrivals
            </h2>
             <div className='homepage_products'>
                 {loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : (products.map((product) => <Product
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
