import  {createStore, combineReducers, applyMiddleware } from 'redux';

// import {
//   configureStore,
//   combineReducers,
//   MiddlewareArray,
// } from '@reduxjs/toolkit'

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducers';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
});

const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware)
));

export default store;

