//this is the index.js file in the layouts folder

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { DashboardLayout } from './dashboardLayout';
import { LoginLayout } from './loginLayout';
import { RegisterLayout } from './registerLayout';
import { NotFoundLayout } from './notFoundLayout';
import { PrivateRoute } from '../../components/privateRoute';
import { Dashboard } from '../../components/pages/dashboard';
import { Login } from '../../components/pages/login';
import { Register } from '../../components/pages/register';
import { NotFound } from '../../components/pages/notFound';

class Layout extends React.Component {
    render() {
        return (
            <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

function mapStateToProps(state) {
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    };
}

const connectedLayout = connect(mapStateToProps)(Layout);
export { connectedLayout as Layout };
