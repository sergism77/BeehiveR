//this is the profileSettingsDelete.js file in the routes folder

import React from 'react';
import { connect } from 'react-redux';
import { profileSettingsDeleteConstants } from '../_constants';
import { profileSettingsDeleteService } from '../_services';
import { profileSettingsDeleteActions } from '../_actions';
import { profileSettingsDelete } from './profileSettingsDelete';

class profileSettingsDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileSettingsDelete: {}
        };
    }

    componentDidMount() {
        this.props.dispatch(profileSettingsDeleteActions.getAll(this.props.profileId));
    }

    render() {
        const { profileSettingsDelete } = this.props;
        return (
            <div>
                <h1>Profile Settings Delete</h1>
                <p>This is the profile settings delete page.</p>
                <profileSettingsDelete profileSettingsDelete={profileSettingsDelete} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { profileSettingsDelete } = state;
    return {
        profileSettingsDelete
    };
}

const connectedProfileSettingsDelete = connect(mapStateToProps)(profileSettingsDelete);
export { connectedProfileSettingsDelete as profileSettingsDelete };
