import {Route, Switch, Redirect} from 'react-router-dom';
import {PageNotFound} from './views/no-match/index';
import {About} from './views/about/index';
import {NavBar} from './views/nav-bar';
import {Home} from './views/home';
import React from 'react';

export const Routes = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/Home' component={Home} />
                <Route exact path='/'>
                    <Redirect to='/Home' />
                </Route>
                <Route path='/About' component={About} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    )
};


