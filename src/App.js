import React from 'react';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';
import {  useState } from 'react';


//Pages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

//css
import './App.scss';
import './index.css';

//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';


 export function App() {
     const [sideToggle, setSideToggle ] = useState(false);
    return (
        <Router>
            <Navbar click={() => setSideToggle(true)}/>
            <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
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
 