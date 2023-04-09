//this is the notFoundLayout.js file in the layouts folder

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class NotFoundLayout extends React.Component {
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

const connectedNotFoundLayout = connect(mapStateToProps)(NotFoundLayout);
export { connectedNotFoundLayout as NotFoundLayout };
