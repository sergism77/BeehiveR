//this is the page that will be rendered when the user clicks on the add user role button
//this is only accessible by the developers and will allow them to add a new user role to the database

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

class UserRolesAddPage extends Component {
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
            })
        }
    }

    getUser = () => {
        fetch(`/api/user/${this.state.user.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    user: {
                        id: responseJson.id,
                        username: responseJson.username,
                        email: responseJson.email,
                        user_role_id: responseJson.user_role_id,
                    }
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            user: {
                ...this.state.user,
                [propertyName]: event.target.value,
            }
        });
    }

    handleSave = (event) => {
        event.preventDefault();
        fetch(`/api/user/${this.state.user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.user),
        }).then((response) => response.json())
            .then((responseJson) => {
                this.props.history.push('/userroles');
            })
            .catch((error) => {
                console.error(error);
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
                                <Typography variant="h5"
                                    component="h3">
                                    Edit User Role
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <form onSubmit={this.handleSave}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="user_role_id">User Role</InputLabel>
                                        <Select
                                            value={this.state.user.user_role_id}
                                            onChange={this.handleInputChangeFor('user_role_id')}
                                            inputProps={{
                                                name: 'user_role_id',
                                                id: 'user_role_id',
                                            }}
                                        >
                                            {this.state.userRoles.map((userRole) => {
                                                return (
                                                    <MenuItem key={userRole.id} value={userRole.id}>{userRole.name}</MenuItem>
                                                )
                                            }
                                            )}
                                        </Select>
                                    </FormControl>
                                    <br />
                                    <Button variant="contained" color="primary" type="submit">Save</Button>
                                    <Button variant="contained" color="secondary" component={Link} to="/userroles">Cancel</Button>
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

export default connect(mapStateToProps)(withStyles(styles)(UserRolesAddPage));

