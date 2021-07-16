import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';

import Footer from './components/Footer/Footer';
import CavalryGear from './components/Gear/CavalryGear';
import InfantryGear from './components/Gear/InfantryGear';
import MixedGear from './components/Gear/MixedGear';
import RangedGear from './components/Gear/RangedGear';
import Home from './components/Home/Home';
import MasterDetail from './components/MasterDetail/MasterDetail';
import NavBar from './components/NavBar/NavBar';
import { Heroes } from './components/Heroes/InfantryHeroes/Heroes';
const App = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/MasterDetail' component={MasterDetail} />
                <Route path='/gear/infantry' component={InfantryGear} />
                <Route path='/gear/ranged' component={RangedGear} />
                <Route path='/gear/cavalry' component={CavalryGear} />
                <Route path='/gear/mixed' component={MixedGear} />
                <Route
                    path='/heroes/infantry'
                    render={(props) => (
                        <Heroes {...props} classType={'infantry'} />
                    )}
                />
                <Route
                    path='/heroes/ranged'
                    render={(props) => (
                        <Heroes {...props} classType={'ranged'} />
                    )}
                />{' '}
                <Route
                    path='/heroes/cavalry'
                    render={(props) => (
                        <Heroes {...props} classType={'cavalry'} />
                    )}
                />    <Route
                path='/heroes/defense'
                render={(props) => (
                    <Heroes {...props} classType={'defense'} />
                )}
            />
            </Switch>
            <Footer />
        </React.Fragment>
    );
};

export default App;
