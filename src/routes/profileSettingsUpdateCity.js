//this is the profileSettingsUpdateCity.js file in the routes folder

import React from 'react';
import { connect } from 'react-redux';
import { profileSettingsUpdateCityConstants } from '../_constants';
import { profileSettingsUpdateCityService } from '../_services';
import { profileSettingsUpdateCityActions } from '../_actions';
import { profileSettingsUpdateCity } from './profileSettingsUpdateCity';

class profileSettingsUpdateCity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileSettingsUpdateCity: {}
        };
    }

    componentDidMount() {
        this.props.dispatch(profileSettingsUpdateCityActions.getAll(this.props.profileId));
    }

    render() {
        const { profileSettingsUpdateCity } = this.props;
        return (
            <div>
                <h1>Profile Settings Update City</h1>
                <p>This is the profile settings update city page.</p>
                <profileSettingsUpdateCity profileSettingsUpdateCity={profileSettingsUpdateCity} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { profileSettingsUpdateCity } = state;
    return {
        profileSettingsUpdateCity
    };
}

const connectedProfileSettingsUpdateCity = connect(mapStateToProps)(profileSettingsUpdateCity);
export { connectedProfileSettingsUpdateCity as profileSettingsUpdateCity };

