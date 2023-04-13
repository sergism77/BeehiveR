//this is the profileSettings in the routes folder:

import React from 'react';
import { connect } from 'react-redux';
import { profileSettingsConstants } from '../_constants';
import { profileSettingsService } from '../_services';
import { profileSettingsDeleteActions } from '../_actions';
import { profileSettingsNotificationsActions } from '../_actions';
import { profileSettingsBlockedUsersActions } from '../_actions';
import { profileMessagesActions } from '../_actions';
import { profileSettingsDelete } from './profileSettingsDelete';
import { profileSettingsNotifications } from './profileSettingsNotifications';
import { profileSettingsBlockedUsers } from './profileSettingsBlockedUsers';
import { profileMessages } from './profileMessages';

class profileSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileSettingsDelete: {},
            profileSettingsNotifications: {},
            profileSettingsBlockedUsers: {},
            profileMessages: {}
        };
    }

    componentDidMount() {
        this.props.dispatch(profileSettingsDeleteActions.getAll(this.props.profileId));
        this.props.dispatch(profileSettingsNotificationsActions.getAll(this.props.profileId));
        this.props.dispatch(profileSettingsBlockedUsersActions.getAll(this.props.profileId));
        this.props.dispatch(profileMessagesActions.getAll(this.props.profileId));
    }

    render() {
        const { profileSettingsDelete, profileSettingsNotifications, profileSettingsBlockedUsers, profileMessages } = this.props;
        return (
            <div>
                <h1>Profile Settings</h1>
                <p>This is the profile settings page.</p>
                <profileSettingsDelete profileSettingsDelete={profileSettingsDelete} />
                <profileSettingsNotifications profileSettingsNotifications={profileSettingsNotifications} />
                <profileSettingsBlockedUsers profileSettingsBlockedUsers={profileSettingsBlockedUsers} />
                <profileMessages profileMessages={profileMessages} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { profileSettingsDelete, profileSettingsNotifications, profileSettingsBlockedUsers, profileMessages } = state;
    return {
        profileSettingsDelete,
        profileSettingsNotifications,
        profileSettingsBlockedUsers,
        profileMessages
    };
}

const connectedProfileSettings = connect(mapStateToProps)(profileSettings);
export { connectedProfileSettings as profileSettings };
