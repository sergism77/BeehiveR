//this is the profileSettingsNotifications.js file in the routes folder

import React from 'react';
import { connect } from 'react-redux';
import { profileSettingsNotificationsConstants } from '../_constants';
import { profileSettingsNotificationsService } from '../_services';
import { profileSettingsNotificationsActions } from '../_actions';
import { profileSettingsNotifications } from './profileSettingsNotifications';

class profileSettingsNotifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileSettingsNotifications: {}
        };
    }

    componentDidMount() {
        this.props.dispatch(profileSettingsNotificationsActions.getAll(this.props.profileId));
    }

    render() {
        const { profileSettingsNotifications } = this.props;
        return (
            <div>
                <h1>Profile Settings Notifications</h1>
                <p>This is the profile settings notifications page.</p>
                <profileSettingsNotifications profileSettingsNotifications={profileSettingsNotifications} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { profileSettingsNotifications } = state;
    return {
        profileSettingsNotifications
    };
}

const connectedProfileSettingsNotifications = connect(mapStateToProps)(profileSettingsNotifications);
export { connectedProfileSettingsNotifications as profileSettingsNotifications };

