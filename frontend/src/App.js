import React from 'react';

import 'bootstrap/dist/js/bootstrap.bundle';

import { Switch, Route } from 'react-router-dom';

import './App.css';

import Footer from './components/Footer/Footer';
import CavalryGear from './components/Gear/CavalryGear';
import InfantryGear from './components/Gear/InfantryGear';
import MixedGear from './components/Gear/MixedGear';
import RangedGear from './components/Gear/RangedGear';
import Grid from './components/Grid/Grid';
import Grid1 from './components/Grid1/Grid1';
import Home from './components/Home/Home';
import MasterDetail from './components/MasterDetail/MasterDetail';
import NavBar from './components/NavBar/NavBar';
import { InfantryHeroes } from './components/Heroes/InfantryHeroes/InfantryHeroes';
//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Grid' component={Grid} />
                <Route path='/Grid1' component={Grid1} />
                <Route path='/MasterDetail' component={MasterDetail} />
                <Route path='/gear/infantry' component={InfantryGear} />
                <Route path='/gear/ranged' component={RangedGear} />
                <Route path='/gear/cavalry' component={CavalryGear} />
                <Route path='/gear/mixed' component={MixedGear} />
                <Route path='/heroes/infantry' component={InfantryHeroes} />
            </Switch>
            <Footer />
        </React.Fragment>
    );
};

export default App;
