//this is the profile page
//

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import { deleteProject } from '../store/actions/projectActions';

const Profile = (props) => {
    const { profile, auth, projects } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
        <div className="container section profile">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{profile.firstName} {profile.lastName}</span>
                    <p>{profile.bio}</p>
                    <p>Joined {moment(profile.createdAt.toDate()).calendar()}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Projects Created: {projects && projects.length}</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth,
        projects: state.firestore.ordered.projects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject: (id) => dispatch(deleteProject(id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Profile)
