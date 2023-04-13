//this is the profileSettingsUpdateEmail.js file in the routes folder

import React from 'react';
import { connect } from 'react-redux';
import { profileSettingsUpdateEmailConstants } from '../_constants';
import { profileSettingsUpdateEmailService } from '../_services';
import { profileSettingsUpdateEmailActions } from '../_actions';
import { profileSettingsUpdateEmail } from './profileSettingsUpdateEmail';

class profileSettingsUpdateEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileSettingsUpdateEmail: {}
        };
    }

    componentDidMount() {
        this.props.dispatch(profileSettingsUpdateEmailActions.getAll(this.props.profileId));
    }

    render() {
        const { profileSettingsUpdateEmail } = this.props;
        return (
            <div>
                <h1>Profile Settings Update Email</h1>
                <p>This is the profile settings update email page.</p>
                <profileSettingsUpdateEmail profileSettingsUpdateEmail={profileSettingsUpdateEmail} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { profileSettingsUpdateEmail } = state;
    return {
        profileSettingsUpdateEmail
    };
}

const connectedProfileSettingsUpdateEmail = connect(mapStateToProps)(profileSettingsUpdateEmail);
export { connectedProfileSettingsUpdateEmail as profileSettingsUpdateEmail };


