//this is the profileSettingsUpdateZip.js file in the routes folder

import React from 'react';
import { connect } from 'react-redux';
import { profileSettingsUpdateZipConstants } from '../_constants';
import { profileSettingsUpdateZipService } from '../_services';
import { profileSettingsUpdateZipActions } from '../_actions';
import { profileSettingsUpdateZip } from './profileSettingsUpdateZip';

class profileSettingsUpdateZip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileSettingsUpdateZip: {}
        };
    }

    componentDidMount() {
        this.props.dispatch(profileSettingsUpdateZipActions.getAll(this.props.profileId));
    }

    render() {
        const { profileSettingsUpdateZip } = this.props;
        return (
            <div>
                <h1>Profile Settings Update Zip</h1>
                <p>This is the profile settings update zip page.</p>
                <profileSettingsUpdateZip profileSettingsUpdateZip={profileSettingsUpdateZip} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { profileSettingsUpdateZip } = state;
    return {
        profileSettingsUpdateZip
    };
}

const connectedProfileSettingsUpdateZip = connect(mapStateToProps)(profileSettingsUpdateZip);
export { connectedProfileSettingsUpdateZip as profileSettingsUpdateZip };

