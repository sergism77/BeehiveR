//this is the entry point for the application
//this is where we will render the app component

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './_helpers';
import { ConnectedIntlProvider } from './SDK/components';
import { Alert } from './SDK/components';
import { PrivateRoute } from './SDK/components';
import { RegisterPage } from './SDK/components/pages/RegisterPage';
import { LoginPage } from './SDK/components/pages/LoginPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './SDK/components/pages/Dashboard';
import { LandingPage } from './SDK/components/pages/LandingPage';
import { Profile } from './SDK/components/pages/Profile';
import { Settings } from './SDK/components/pages/Settings';
import { NotFound } from './SDK/components/pages/NotFound';
import { ForgotPassword } from './SDK/components/pages/ForgotPassword';
import { ResetPassword } from './SDK/components/pages/ResetPassword';
import { VerifyEmail } from './SDK/components/pages/VerifyEmail';
import './styles/index.scss';

//how do we import history from the store?
//do we need to create a history.js in the store folder?
//do we need to create a history.js in the helpers folder?
//do we need to create a history.js in the components folder?
//do we need to create a history.js in the layouts folder?
//do we need to create a history.js in the pages folder?
//do we need to create a history.js in the routes folder?
//do we need to create a history.js in the actions folder?
//do we need to create a history.js in the reducers folder?
//do we need to create a history.js in the selectors folder?
//do we need to create a history.js in the utils folder?
//do we need to create a history.js in the constants folder?
//do we need to create a history.js in the services folder?


render(
    <Provider store={store}>
        <ConnectedIntlProvider>
            <ConnectedRouter history={history}>
                <Alert />
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/forgot-password" component={ForgotPassword} />
                    <Route exact path="/reset-password" component={ResetPassword} />
                    <Route exact path="/verify-email" component={VerifyEmail} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <PrivateRoute exact path="/profile" component={Profile} />
                    <PrivateRoute exact path="/settings" component={Settings} />
                    <Route component={NotFound} />
                </Switch>
            </ConnectedRouter>
        </ConnectedIntlProvider>
    </Provider>,
    document.getElementById('root')
);
