require('file-loader?name=[name].[ext]!./index.html');//import html file
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './App.scss';

const appElement = document.getElementById('root');

ReactDOM.render(
<App />, appElement);
