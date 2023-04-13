//this is the profileSettingsSecurity.js file in the routes folder

import React from 'react';
import { connect } from 'react-redux';
import { profileSettingsSecurityConstants } from '../_constants';
import { profileSettingsSecurityService } from '../_services';
import { profileSettingsSecurityActions } from '../_actions';
import { profileSettingsSecurity } from './profileSettingsSecurity';

class profileSettingsSecurity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileSettingsSecurity: {}
        };
    }

    componentDidMount() {
        this.props.dispatch(profileSettingsSecurityActions.getAll(this.props.profileId));
    }

    render() {
        const { profileSettingsSecurity } = this.props;
        return (
            <div>
                <h1>Profile Settings Security</h1>
                <p>This is the profile settings security page.</p>
                <profileSettingsSecurity profileSettingsSecurity={profileSettingsSecurity} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { profileSettingsSecurity } = state;
    return {
        profileSettingsSecurity
    };
}

const connectedProfileSettingsSecurity = connect(mapStateToProps)(profileSettingsSecurity);
export { connectedProfileSettingsSecurity as profileSettingsSecurity };

