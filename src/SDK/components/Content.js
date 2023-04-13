//this is the Content.js file located in the src/components folder

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { NotFound } from './pages/NotFound';

export class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}
