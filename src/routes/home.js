//this is the home.js file in the routes folder

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React & JWT!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };


//what routes are we still missing in the routes folder?
//we need to add the profileSettingsUpdateAddress.js file to the routes folder
//we need to add the profileSettingsUpdatePayment.js file to the routes folder
//we need to add the profileSettingsUpdateBilling.js file to the routes folder
//we need to add the profileSettingsUpdateShipping.js file to the routes folder
//we need to add the profileSettingsUpdateSocial.js file to the routes folder
//we need to add the profileSettingsUpdateBackground.js file to the routes folder
//we need to add the profileSettingsUpdateTheme.js file to the routes folder
//we need to add the profileSettingsUpdateCurrency.js file to the routes folder
//we need to add the profileSettingsUpdateTimezone.js file to the routes folder
//we need to add the profileSettingsUpdateRegion.js file to the routes folder
//we need to add the profileSettingsUpdateCity.js file to the routes folder
//we need to add the profileSettingsUpdateZip.js file to the routes folder
//we need to add the profileSettingsUpdateAbout.js file to the routes folder
//we need to add the profileSettingsUpdateWebsite.js file to the routes folder
//we need to add the profileSettingsUpdateFacebook.js file to the routes folder
//we need to add the profileSettingsUpdateTwitter.js file to the routes folder
//we need to add the profileSettingsUpdateInstagram.js file to the routes folder
//we need to add the profileSettingsUpdateLinkedin.js file to the routes folder
//we need to add the profileSettingsUpdateYoutube.js file to the routes folder

