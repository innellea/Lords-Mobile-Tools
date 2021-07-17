import React, { Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';

import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
const Heroes = React.lazy(() => import('./components/Heroes/Heroes'));
const MixedGear = React.lazy(() => import('./components/Gear/MixedGear'));
const RangedGear = React.lazy(() => import('./components/Gear/RangedGear'));
const CavalryGear = React.lazy(() => import('./components/Gear/CavalryGear'));
const InfantryGear = React.lazy(() => import('./components/Gear/InfantryGear'));

const App = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Suspense fallback={<div>Loading...</div>}>
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
                    />{' '}
                    <Route
                        path='/heroes/defense'
                        render={(props) => (
                            <Heroes {...props} classType={'defense'} />
                        )}
                    />
                </Suspense>
            </Switch>
            <Footer />
        </React.Fragment>
    );
};

export default App;
