//this is user roles edit page. This will only be accessible to developers, and will allow them to edit the user roles of other users.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Button, Typography, TextField, MenuItem, Select, InputLabel, FormControl } from '@material-ui/core';
import { USER_ACTIONS } from '../redux/actions/userActions';
import { triggerLogout } from '../redux/actions/loginActions';
import { USER_ROLES } from '../redux/actions/userRolesActions';

const mapStateToProps = state => ({
    user: state.user,
    userRoles: state.userRoles,
});

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class UserRolesEditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: this.props.match.params.id,
                username: '',
                email: '',
                user_role_id: '',
            },
            userRoles: [],
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch({ type: USER_ROLES.FETCH_USER_ROLES });
        this.getUser();
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
        if (this.props.userRoles.userRoles.length > 0 && this.state.userRoles.length === 0) {
            this.setState({
                userRoles: this.props.userRoles.userRoles,
            });
        }
    }

    getUser = () => {
        fetch(`/api/user/${this.state.user.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    user: {
                        id: data.id,
                        username: data.username,
                        email: data.email,
                        user_role_id: data.user_role_id,
                    }
                });
            })
            .catch(err => {
                console.log('Error getting user', err);
            });
    }

    handleChange = (propertyName) => (event) => {
        this.setState({
            user: {
                ...this.state.user,
                [propertyName]: event.target.value,
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/api/user/${this.state.user.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.user),
        })
            .then(response => response.json())
            .then(data => {
                this.props.history.push('/users');
            })
            .catch(err => {
                console.log('Error updating user', err);
            });
    }

    render() {
        let content = null;
        const { classes } = this.props;
        if (this.props.user.userName) {
            content = (
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography variant="display1" gutterBottom>
                                    Edit User Roles
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <form onSubmit={this.handleSubmit}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="user-role">User Role</InputLabel>
                                        <Select
                                            value={this.state.user.user_role_id}
                                            onChange={this.handleChange('user_role_id')}
                                            inputProps={{
                                                name: 'user-role',
                                                id: 'user-role',
                                            }}
                                        >
                                            {this.state.userRoles.map((userRole) => {
                                                return (
                                                    <MenuItem key={userRole.id} value={userRole.id}>{userRole.name}</MenuItem>
                                                );
                                            })}
                                        </Select>
                                    </FormControl>
                                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                                        Submit
                                    </Button>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            );
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}

export default connect(mapStateToProps)(withStyles(styles)(UserRolesEditPage));

