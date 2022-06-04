import React from 'react';
import './ProductPage.css';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';


const ProductPage = ({ match, history }) => {
    const dispatch = useDispatch();

    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
           dispatch(getProductDetails(match.params.id))
       }
    }, [dispatch, product, match]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push('/cart');
    }

    return (
        <div className='productpage'>
            {loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : (
                <>
                <div className="productpage__left">
                    <div className='left_image'>
                        <img
                            src={product.imageUrl} alt={product.name}
                        />
                    </div>  
                    <div className="left_info">
                        <p className="left_name">{product.name}</p>
                        <p>Price: ${product.price}</p>
                        <p>Description: {product.description}...</p>
                    </div>
                </div>
                <div className="productpage__right">
                    <div className="right_info">
                        <p> Price: <span>${product.price} </span></p>
                        <p> Stock: <span> {product.numberInStock > 0 ? "In Stock" : "Out of Stock"} </span></p>
                        <p>
                            Qty
                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                {[...Array(product.numberInStock).keys()].map((x) => {
                                    return <option key={x+1} value={x+1}>{x+1}</option>
                                })};
                            </select>
                        </p>
                        <p>
                            <button type="button" onClick={() => addToCartHandler()}>Add To Cart</button>
                        </p>
                    </div>
                </div>
                </>
            )}
        </div>
    )
};

export default ProductPage
