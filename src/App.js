import React from 'react';
import ErrorBoundary from './components/ErrorBoundary'
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'//import react router library on top of React to provide frontend routing and navigation functionalities in React apps
//

//Webpages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import './App.scss';
import './index.css';

//Components
import Navbar from './components/Navbar';

 export function App() {
    return (
        
        <Router>
            {/* <ErrorBoundary /> */}
            <Navbar />
            <h2 className="hello">Hello World! Today is {new Date().toDateString()}.</h2>
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/product/:id' component={ProductPage}/>
                    <Route exact path='/cart' component={CartPage}/>
                </Switch>
             </main>
                    </Router>
            );
};
 
// export default App;// doesn't work if using webpack???