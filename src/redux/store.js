import  {createStore, combineReducers, applyMiddleWare } from 'redux';
import thunk from 'redux-thunk' 
import { composeWithDevTools } from redux-devtools-extensions;

const reducer = combineReducers({


})

const middleware = [thunk];

