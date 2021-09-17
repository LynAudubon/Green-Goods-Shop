import  {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';

const reducer = combineReducers({});

const store = createStore(reducer, composeWithDevTools(thunk));

export default store;

