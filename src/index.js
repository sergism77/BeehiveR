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
import { Profile } from './components/pages/Profile';
import { Settings } from './components/pages/Settings';
import { NotFound } from './components/pages/NotFound';
import { ForgotPassword } from './components/pages/ForgotPassword';
import { ResetPassword } from './components/pages/ResetPassword';
import { VerifyEmail } from './components/pages/VerifyEmail';



render(
    <Provider store={store}>
        <ConnectedIntlProvider>
            <ConnectedRouter history={history}>
                <DashboardLayout>
                    <Alert />
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/register" component={RegisterPage} />
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/forgot-password" component={ForgotPassword} />
                        <Route exact path="/reset-password" component={ResetPassword} />
                        <Route exact path="/verify-email" component={VerifyEmail} />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        <PrivateRoute exact path="/profile" component={Profile} />
                        <PrivateRoute exact path="/settings" component={Settings} />
                        <Route component={NotFound} />
                    </Switch>
                </DashboardLayout>
            </ConnectedRouter>
        </ConnectedIntlProvider>
    </Provider>,
    document.getElementById('root')
);

