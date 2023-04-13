//this is the profileSettingsUpdateUsername.js file in the routes folder

import React from 'react';
import { connect } from 'react-redux';
import { profileSettingsUpdateUsernameConstants } from '../_constants';
import { profileSettingsUpdateUsernameService } from '../_services';
import { profileSettingsUpdateUsernameActions } from '../_actions';
import { profileSettingsUpdateUsername } from './profileSettingsUpdateUsername';

class profileSettingsUpdateUsername extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileSettingsUpdateUsername: {}
        };
    }

    componentDidMount() {
        this.props.dispatch(profileSettingsUpdateUsernameActions.getAll(this.props.profileId));
    }

    render() {
        const { profileSettingsUpdateUsername } = this.props;
        return (
            <div>
                <h1>Profile Settings Update Username</h1>
                <p>This is the profile settings update username page.</p>
                <profileSettingsUpdateUsername profileSettingsUpdateUsername={profileSettingsUpdateUsername} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { profileSettingsUpdateUsername } = state;
    return {
        profileSettingsUpdateUsername
    };
}

const connectedProfileSettingsUpdateUsername = connect(mapStateToProps)(profileSettingsUpdateUsername);
export { connectedProfileSettingsUpdateUsername as profileSettingsUpdateUsername };

