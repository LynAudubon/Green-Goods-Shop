import React from 'react';
// import './App.scss';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'//import react router library on top of React to provide frontend routing and navigation functionalities in React apps
//

//Webpages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

//Components
import Navbar from './components/Navbar';

 export function App() {
    return (
        <Router>
            <Navbar />
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/product/:id' component={ProductPage}/>
                    <Route exact path='/cart' component={CartPage}/>
                </Switch>
             </main>
            <h2>Hello World! Today is {new Date().toDateString()}.</h2>
        </Router>
    );
};
 
// export default App;// doesn't work if using webpack???