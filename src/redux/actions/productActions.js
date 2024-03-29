import * as actionTypes from '../constants/productConstants';
import axios from 'axios';
import 'regenerator-runtime/runtime';


export const getProducts = () => async(dispatch) => {
        try {
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

        const { data } = await axios.get('/api/products');
        console.log(data);

        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data,
         });

        } catch (error) {
                dispatch({
                type: actionTypes.GET_PRODUCTS_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            });
        }
};

export const getProductDetails = (id) => async(dispatch) => {
    console.log('details', id);
    try {
        dispatch({ 
            type: actionTypes.GET_PRODUCT_DETAILS_REQUEST,
        });

        const { data } = await axios.get(`/api/products/${id}`);
        console.log('fetch', data);

        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
            });
        } catch (error) {
            dispatch({
                type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            });
        }
};

export const removeProductDetails = () => (dispatch) => {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_RESET
        });
};

