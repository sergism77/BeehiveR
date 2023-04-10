//this is the logged in user's page
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { USER_ACTIONS } from '../redux/actions/userActions';
import { triggerLogout } from '../redux/actions/loginActions';
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
    state,
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

class UserPage extends Component {
    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(triggerGetUser(this.props.match.params.id));
        this.props.dispatch(triggerGetUserEvents(this.props.match.params.id));
        this.props.dispatch(triggerGetUserGroups(this.props.match.params.id));
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    logout = () => {
        this.props.dispatch(triggerLogout());
    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <Card className={this.props.classes.card}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {this.props.user.user.first_name} {this.props.user.user.last_name}
                            </Typography>
                            <Typography className={this.props.classes.pos} color="textSecondary">
                                {this.props.user.user.email}
                            </Typography>
                            <Typography component="p">
                                {this.props.user.user.bio}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><Link to="/user/edit">Edit</Link></Button>
                            <Button size="small"><Link to="/user/delete">Delete</Link></Button>
                            <Button size="small"><Link to="/user/roles">Roles</Link></Button>
                        </CardActions>
                    </Card>
                    <EventList />
                    <GroupList />
                </div>
            );
        }

        return (
            <div>
                <h1 id="welcome">
                    Welcome, {this.props.user.userName}!
                </h1>
                <Button onClick={this.logout}>Log Out</Button>
                {content}
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(UserPage));

