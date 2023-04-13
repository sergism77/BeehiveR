//this is the profileSettingsUpdatePassword.js file in the routes folder

import React from 'react';
import { connect } from 'react-redux';
import { profileSettingsUpdatePasswordConstants } from '../_constants';
import { profileSettingsUpdatePasswordService } from '../_services';
import { profileSettingsUpdatePasswordActions } from '../_actions';
import { profileSettingsUpdatePassword } from './profileSettingsUpdatePassword';

class profileSettingsUpdatePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileSettingsUpdatePassword: {}
        };
    }

    componentDidMount() {
        this.props.dispatch(profileSettingsUpdatePasswordActions.getAll(this.props.profileId));
    }

    render() {
        const { profileSettingsUpdatePassword } = this.props;
        return (
            <div>
                <h1>Profile Settings Update Password</h1>
                <p>This is the profile settings update password page.</p>
                <profileSettingsUpdatePassword profileSettingsUpdatePassword={profileSettingsUpdatePassword} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { profileSettingsUpdatePassword } = state;
    return {
        profileSettingsUpdatePassword
    };
}

const connectedProfileSettingsUpdatePassword = connect(mapStateToProps)(profileSettingsUpdatePassword);
export { connectedProfileSettingsUpdatePassword as profileSettingsUpdatePassword };

