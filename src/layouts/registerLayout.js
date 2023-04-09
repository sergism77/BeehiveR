//this is the registerLayout.js file

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//what else should we import in this file?
//1. we should import the Route component from the react-router-dom library
//2. we should import the Redirect component from the react-router-dom library
//3. we should import the connect function from the react-redux library

//what should we do in this file?
//1. we should create a class called RegisterLayout
//2. we should create a function called mapStateToProps
//3. we should create a function called connectedRegisterLayout
//4. we should export the connectedRegisterLayout function

class RegisterLayout extends React.Component {
    render() {
        const { component: Component, ...rest } = this.props;

        return (
            <Route {...rest} render={matchProps => (
                this.props.loggedIn
                    ? <Redirect to='/' />
                    : <Component {...matchProps} />
            )} />
        );
    }
}

function mapStateToProps(state) {
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    };
}

const connectedRegisterLayout = connect(mapStateToProps)(RegisterLayout);
export { connectedRegisterLayout as RegisterLayout };
