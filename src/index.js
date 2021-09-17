require('file-loader?name=[name].[ext]!./index.html');//import html file
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './App.scss';
import './index.css';
import {} from 'react-dom'
import store from './redux/store'

import {Provider} from 'react-redux'

const appElement = document.getElementById('root');

ReactDOM.render (
  <Provider store={store}>
       <App />
  </Provider>,
appElement
);
