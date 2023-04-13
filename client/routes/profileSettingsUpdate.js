//this is the profileSettingsUpdate.js file in the routes folder

import React from 'react';
import { connect } from 'react-redux';
import { profileSettingsUpdateConstants } from '../_constants';
import { profileSettingsUpdateService } from '../_services';
import { profileSettingsUpdateActions } from '../_actions';
import { profileSettingsUpdate } from './profileSettingsUpdate';

class profileSettingsUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileSettingsUpdate: {}
        };
    }

    componentDidMount() {
        this.props.dispatch(profileSettingsUpdateActions.getAll(this.props.profileId));
    }

    render() {
        const { profileSettingsUpdate } = this.props;
        return (
            <div>
                <h1>Profile Settings Update</h1>
                <p>This is the profile settings update page.</p>
                <profileSettingsUpdate profileSettingsUpdate={profileSettingsUpdate} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { profileSettingsUpdate } = state;
    return {
        profileSettingsUpdate
    };
}

const connectedProfileSettingsUpdate = connect(mapStateToProps)(profileSettingsUpdate);
export { connectedProfileSettingsUpdate as profileSettingsUpdate };

