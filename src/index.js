//this is the entry point for the application
//this is where we will render the app component

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './_helpers';
import { ConnectedIntlProvider } from './components';
import { Alert } from './components';
import { PrivateRoute } from './components';
import { RegisterPage } from './components/pages/RegisterPage';
import { LoginPage } from './components/pages/LoginPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './components/pages/Dashboard';
import { LandingPage } from './components/pages/LandingPage';

render(
    <Provider store={store}>
        <ConnectedIntlProvider>
            <ConnectedRouter history={history}>
                <Alert />
                <Switch>
                    <PrivateRoute exact path="/" component={DashboardLayout} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/landing-page" component={LandingPage} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </ConnectedRouter>
        </ConnectedIntlProvider>
    </Provider>,
    document.getElementById('app')
);

export { App };