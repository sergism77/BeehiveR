//this is the settings page
//every user has access only to their own settings
//here the user can choose to be public to other registered users or to be private
//being private means that all data will be anonymized but still accesible for research purposes
//being private means that other users can't send them messages, answer their questions, or comment on their posts
//private users can opt to be public whenever they want and vise versa
//private users will not have all the functionality of the site
//private users can see all the posts, but they can't comment on them
//private users can see all the questions, but they can't answer them
//private users can see all the answers, but they can't comment on them
//private users can see all the comments, but they can't comment on them
//private users can see all the users, but they can't send them messages
//private users are encouraged to become public users so the community benefits from their knowledge and experience 
//this page will allow the user to change from dark to light mode, if they want to recieve email when someone comments on their post, and if they want to receive email when someone comments on their comment, when someone answers their question, and when someone answers their answer to a question
//they can also choose to get email with weather alerts in their apiary zone
//they can also choose if they want the Seigrbot to send them messages with recommendations or not

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

class SettingsPage extends Component {
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
    }

    getUser = () => {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch({ type: USER_ROLES.FETCH_USER_ROLES });
        this.setState({
            user: this.props.user,
            userRoles: this.props.userRoles,
        });
    }

    handleChange = (propertyName) => {
        return (event) => {
            this.setState({
                user: {
                    ...this.state.user,
                    [propertyName]: event.target.value,
                }
            });
        }
    }

    updateUser = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: USER_ACTIONS.UPDATE_USER, payload: this.state.user });
        this.props.history.push('/settings');
    }

    logout = () => {
        this.props.dispatch(triggerLogout());
        this.props.history.push('home');
    }

    render() {
        let content = null;
        let userRole = '';
        if (this.props.user && this.props.user.user_role_id) {
            userRole = this.props.user.user_role_id;
        }
        if (this.props.user.userName) {
            content = (
                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Paper className={this.props.classes.paper}>
                                <Typography variant="h4" gutterBottom>
                                    Settings
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    {this.props.user.username}
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    {this.props.user.email}
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    {this.props.user.user_role_id}
                                </Typography>
                                <form onSubmit={this.updateUser}>
                                    <FormControl className={this.props.classes.formControl}>
                                        <InputLabel htmlFor="user_role_id">User Role</InputLabel>
                                        <Select
                                            value
                                            onChange={this.handleChange('user_role_id')}
                                            inputProps={{
                                                name: 'user_role_id',
                                                id: 'user_role_id',
                                            }}
                                        >   
                                            <MenuItem value={1}>Admin</MenuItem>
                                            <MenuItem value={2}>Moderator</MenuItem>
                                            <MenuItem value={3}>User</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Button type="submit" variant="contained" color="primary">Update</Button>
                                </form>
                                <Button onClick={this.logout} variant="contained" color="secondary">Logout</Button>
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

export default connect(mapStateToProps)(withStyles(styles)(SettingsPage));

