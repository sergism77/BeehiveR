//this is the profileSettingsUpdateAvatar.js file in the routes folder

import React from 'react';
import { connect } from 'react-redux';
import { profileSettingsUpdateAvatarConstants } from '../_constants';
import { profileSettingsUpdateAvatarService } from '../_services';
import { profileSettingsUpdateAvatarActions } from '../_actions';
import { profileSettingsUpdateAvatar } from './profileSettingsUpdateAvatar';

class profileSettingsUpdateAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileSettingsUpdateAvatar: {}
        };
    }

    componentDidMount() {
        this.props.dispatch(profileSettingsUpdateAvatarActions.getAll(this.props.profileId));
    }

    render() {
        const { profileSettingsUpdateAvatar } = this.props;
        return (
            <div>
                <h1>Profile Settings Update Avatar</h1>
                <p>This is the profile settings update avatar page.</p>
                <profileSettingsUpdateAvatar profileSettingsUpdateAvatar={profileSettingsUpdateAvatar} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { profileSettingsUpdateAvatar } = state;
    return {
        profileSettingsUpdateAvatar
    };
}

const connectedProfileSettingsUpdateAvatar = connect(mapStateToProps)(profileSettingsUpdateAvatar);
export { connectedProfileSettingsUpdateAvatar as profileSettingsUpdateAvatar };

