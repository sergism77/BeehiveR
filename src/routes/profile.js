//this is the profile route

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Profile from '../components/Profile';

const ProfileRoute = ({ component: Component, auth, profile, ...rest }) => (
    <Route {...rest} render={props => {
        if (!auth.uid) return <Redirect to='/signin' />
        if (profile.isLoaded && !profile.isEmpty) {
            return <Component {...props} />
        } else {
            return <div>Loading profile...</div>
        }
    }
    } />
)

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

ProfileRoute.propTypes = {
    auth: PropTypes.object
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(ProfileRoute)