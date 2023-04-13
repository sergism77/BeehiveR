//this is the UsersPage.js file in the pages folder
//this page will show all users that allow their profiles to be visible for other users
//this page shows a list of all users, but those who choose not to be public will be shown as "private"
//the list of users can be sorted by location, apiary size (how many beehives their apiary have), logged in users, not logged in users, and users who are public
//when the user clicks on a user, they will be shown a window with the user's profile information. From that window they can navigate to the user's profile
//the user's profile will show the user's apiary, their events, and their groups
//the user's profile will also show the user's contact information, and a button to send a message to the user
//the user's profile will show an add as friend button, and a follow button


import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { USER_ACTIONS } from '../redux/actions/userActions';
import { triggerLogout } from '../redux/actions/loginActions';
import { triggerGetUsers } from '../redux/actions/userActions';
import { triggerGetUser } from '../redux/actions/userActions';
import { triggerGetUserEvents } from '../redux/actions/eventActions';
import { triggerGetUserGroups } from '../redux/actions/groupActions';
import EventList from '../components/EventList/EventList';
import GroupList from '../components/GroupList/GroupList';
import UserEditPage from './UserEditPage';
import UserDeletePage from './UserDeletePage';
import UserRolesPage from './UserRolesPage';
import UserRolesEditPage from './UserRolesEditPage';
import UserRolesAddPage from './UserRolesAddPage';
import UserRolesDeletePage from './UserRolesDeletePage';
import RolesPage from './RolesPage';
import RolePage from './RolePage';
import RoleEditPage from './RoleEditPage';
import RoleAddPage from './RoleAddPage';
import RoleDeletePage from './RoleDeletePage';
import RolePermissionsPage from './RolePermissionsPage';
import RolePermissionsEditPage from './RolePermissionsEditPage';
import RolePermissionsAddPage from './RolePermissionsAddPage';
import RolePermissionsDeletePage from './RolePermissionsDeletePage';
import PermissionsPage from './PermissionsPage';

const mapStateToProps = state => ({
    user: state.user,
    users: state.users,
    events: state.events,
    groups: state.groups,
    roles: state.roles,
    permissions: state.permissions,
});

const styles = {
    card: {
        minWidth: 275,
        margin: 10,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class UsersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: '',
                username: '',
                email: '',
                first_name: '',
                last_name: '',
                phone: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                country: '',
                latitude: '',
                longitude: '',
                apiary_name: '',
                apiary_size: '',
                apiary_description: '',
                apiary_address: '',
                apiary_city: '',
                apiary_state: '',
                apiary_zip: '',
                apiary_country: '',
                apiary_latitude: '',
                apiary_longitude: '',
                apiary_public: '',
                apiary_image: '',
                apiary_image_url: '',
                apiary_image_name: '',
                apiary_image_type: '',
                apiary_image_size: '',
                apiary_image_last_modified: '',
                apiary_image_lastModifiedDate: '',
                apiary_image_lastModifiedDate_formatted: '',
                apiary_image_lastModifiedDate_formatted_short: '',
                apiary_image_lastModifiedDate_formatted_long: '',
                apiary_image_lastModifiedDate_formatted_long_with_time: '',
                apiary_image_lastModifiedDate_formatted_long_with_time_and_zone: '',
                apiary_image_lastModifiedDate_formatted_long_with_time_and_zone_short: '',
                apiary_image_lastModifiedDate_formatted_long_with_time_and_zone_long: '',
                apiary_image_lastModifiedDate_formatted_long_with_time_and_zone_long_with_seconds: '',
                apiary_image_lastModifiedDate_formatted_long_with_time_and_zone_long_with_seconds_short: '',
                apiary_image_lastModifiedDate_formatted_long_with_time_and_zone_long_with_seconds_long: ''
        
            },
            users: [],
            events: [],
            groups: [],
            roles: [],
            permissions: [],
            user_id: '',
            user_username: '',
            user_email: '',
            user_first_name: '',
            user_last_name: '',
            user_phone: '',
            user_address: '',
            user_city: '',
            user_state: '',
            user_zip: '',
            user_country: '',
            user_latitude: '',
            user_longitude: '',
            user_apiary_name: '',
            user_apiary_size: '',
            user_apiary_description: '',
            user_apiary_address: '',
            user_apiary_city: '',
            user_apiary_state: '',
            user_apiary_zip: '',
            user_apiary_country: '',
            user_apiary_latitude: '',
            user_apiary_longitude: '',
            user_apiary_public: '',
            user_apiary_image: '',
            user_apiary_image_url: '',
            user_apiary_image_name: '',
            user_apiary_image_type: '',
            user_apiary_image_size: '',
            user_apiary_image_last_modified: '',
            user_apiary_image_lastModifiedDate: '',
            user_apiary_image_lastModifiedDate_formatted: '',
            user_apiary_image_lastModifiedDate_formatted_short: '',
            user_apiary_image_lastModifiedDate_formatted_long: '',
            user_apiary_image_lastModifiedDate_formatted_long_with_time: '',
            user_apiary_image_lastModifiedDate_formatted_long_with_time_and_zone: '',
            user_apiary_image_lastModifiedDate_formatted_long_with_time_and_zone_short: '',
            user_apiary_image_lastModifiedDate_formatted_long_with_time_and_zone_long: '',

        };
    }

    componentDidMount() {
        this.props.dispatch(triggerGetUsers());
        this.props.dispatch(triggerGetUser());
        this.props.dispatch(triggerGetUserEvents());
        this.props.dispatch(triggerGetUserGroups());
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    logout = () => {
        this.props.dispatch(triggerLogout());
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <h1 id="welcome">
                        Welcome, {this.props.user.userName}!
                    </h1>
                    <p>Your ID is: {this.props.user.id}</p>
                    <p>Your Username is: {this.props.user.username}</p>
                    <p>Your Email is: {this.props.user.email}</p>
                    <p>Your First Name is: {this.props.user.first_name}</p>
                    <p>Your Last Name is: {this.props.user.last_name}</p>
                    <p>Your Phone is: {this.props.user.phone}</p>
                    <p>Your Address is: {this.props.user.address}</p>
                    <p>Your City is: {this.props.user.city}</p>
                    <p>Your State is: {this.props.user.state}</p>
                    <p>Your Zip is: {this.props.user.zip}</p>
                    <p>Your Country is: {this.props.user.country}</p>
                    <p>Your Latitude is: {this.props.user.latitude}</p>
                    <p>Your Longitude is: {this.props.user.longitude}</p>
                    <p>Your Apiary Name is: {this.props.user.apiary_name}</p>
                    <p>Your Apiary Size is: {this.props.user.apiary_size}</p>
                    <p>Your Apiary Description is: {this.props.user.apiary_description}</p>
                    <p>Your Apiary Address is: {this.props.user.apiary_address}</p>
                    <p>Your Apiary City is: {this.props.user.apiary_city}</p>
                    <p>Your Apiary State is: {this.props.user.apiary_state}</p>
                    <p>Your Apiary Zip is: {this.props.user.apiary_zip}</p>
                    <p>Your Apiary Country is: {this.props.user.apiary_country}</p>
                    <p>Your Apiary Latitude is: {this.props.user.apiary_latitude}</p>
                    <p>Your Apiary Longitude is: {this.props.user.apiary_longitude}</p>
                    <p>Your Apiary Public is: {this.props.user.apiary_public}</p>
                    <p>Your Apiary Image is: {this.props.user.apiary_image}</p>
                    <p>Your Apiary Image Url is: {this.props.user.apiary_image_url}</p>
                    <p>Your Apiary Image Name is: {this.props.user.apiary_image_name}</p>
                    <p>Your Apiary Image Type is: {this.props.user.apiary_image_type}</p>
                    <p>Your Apiary Image Size is: {this.props.user.apiary_image_size}</p>
                    <p>Your Apiary Image Last Modified is: {this.props.user.apiary_image_last_modified}</p>
                    <p>Your Apiary Image Last Modified Date is: {this.props.user.apiary_image_lastModifiedDate}</p>
                    <p>Your Apiary Image Last Modified Date Formatted is: {this.props.user.apiary_image_lastModifiedDate_formatted}</p>
                    <p>Your Apiary Image Last Modified Date Formatted Short is: {this.props.user.apiary_image_lastModifiedDate_formatted_short}</p>
                    <p>Your Apiary Image Last Modified Date Formatted Long is: {this.props.user.apiary_image_lastModifiedDate_formatted_long}</p>

                </div>
            );
        }
        
        return (
            <div>
                <h1>Profile</h1>
                {content}
                <button onClick={this.logout}>Log Out</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    users: state.users,
    userEvents: state.userEvents,
    userGroups: state.userGroups,
});

export default connect(mapStateToProps)(ProfilePage);
