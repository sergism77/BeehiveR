//this is the profileSettingsUpdateCountry.js file in the routes folder

import React from 'react';
import { connect } from 'react-redux';
import { profileSettingsUpdateCountryConstants } from '../_constants';
import { profileSettingsUpdateCountryService } from '../_services';
import { profileSettingsUpdateCountryActions } from '../_actions';
import { profileSettingsUpdateCountry } from './profileSettingsUpdateCountry';

class profileSettingsUpdateCountry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileSettingsUpdateCountry: {}
        };
    }

    componentDidMount() {
        this.props.dispatch(profileSettingsUpdateCountryActions.getAll(this.props.profileId));
    }

    render() {
        const { profileSettingsUpdateCountry } = this.props;
        return (
            <div>
                <h1>Profile Settings Update Country</h1>
                <p>This is the profile settings update country page.</p>
                <profileSettingsUpdateCountry profileSettingsUpdateCountry={profileSettingsUpdateCountry} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { profileSettingsUpdateCountry } = state;
    return {
        profileSettingsUpdateCountry
    };
}

const connectedProfileSettingsUpdateCountry = connect(mapStateToProps)(profileSettingsUpdateCountry);
export { connectedProfileSettingsUpdateCountry as profileSettingsUpdateCountry };

