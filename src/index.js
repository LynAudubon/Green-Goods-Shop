// require('file-loader?name=[name].[ext]!./index.html');//import html file
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

//redux
import store from './redux/store';
import { Provider } from 'react-redux';

 const rootElement =  document.getElementById('root');
 const root = createRoot(rootElement);

root.render (
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>
);
