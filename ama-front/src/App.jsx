import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';

/* import { LogoLink
 } from '../../components/LogoLink'; */


//layouts
import Dashboard from './templates/Dashboard';
import Loja from './templates/Loja';
import Home from './templates/Home';

export default function App () {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route exact path="/shop" component={Loja} />
                </Switch>
            </Router>


        </div>
    );
}

