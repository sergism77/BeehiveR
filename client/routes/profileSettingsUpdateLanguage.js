//this is the profileSettingsUpdateLanguage.js file in the routes folder

import React from 'react';
import { connect } from 'react-redux';
import { profileSettingsUpdateLanguageConstants } from '../_constants';
import { profileSettingsUpdateLanguageService } from '../_services';
import { profileSettingsUpdateLanguageActions } from '../_actions';
import { profileSettingsUpdateLanguage } from './profileSettingsUpdateLanguage';

class profileSettingsUpdateLanguage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileSettingsUpdateLanguage: {}
        };
    }

    componentDidMount() {
        this.props.dispatch(profileSettingsUpdateLanguageActions.getAll(this.props.profileId));
    }

    render() {
        const { profileSettingsUpdateLanguage } = this.props;
        return (
            <div>
                <h1>Profile Settings Update Language</h1>
                <p>This is the profile settings update language page.</p>
                <profileSettingsUpdateLanguage profileSettingsUpdateLanguage={profileSettingsUpdateLanguage} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { profileSettingsUpdateLanguage } = state;
    return {
        profileSettingsUpdateLanguage
    };
}

const connectedProfileSettingsUpdateLanguage = connect(mapStateToProps)(profileSettingsUpdateLanguage);
export { connectedProfileSettingsUpdateLanguage as profileSettingsUpdateLanguage };

