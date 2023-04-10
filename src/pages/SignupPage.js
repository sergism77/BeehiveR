//this is the signup page that will allow the user to create an account
//users must provide a valid email address, a username, and a password
//the password must be at least 6 characters long
//once the user has given email and password they will need to confirm their email address before they can log in to the app 
//the user will be sent an email with a link to confirm their email address
//the user will be able to log in to the app once they have confirmed their email address
//the user will be redirected to a welcome page that will explain how to use the app when they click the link in the email to confirm their email address 
//it is important that the user understands how to use the app before they start using it
//it is important that the user understands that the app is open source with Apache 2.0 license
//it is important that the user understands how their data will be used for research purposes
//it is important that the user understands that they can opt out of the research at any time
//it is important that the user understands that they can opt out of the app at any time
//make sure that they can open a new window with all the basic information about the app and check a box to confirm that they have read it
//make the sign up bot resistant, DDOS resistant, and spam resistant
//make sure that the user can't sign up with a username that is already taken
//make sure that the user can't sign up with an email address that is already taken
//if they try to sign up with a username that is already taken, tell them that the username is already taken
//if they try to sign up with an email address that is already taken, tell them that the email address is already taken
//let the user choose if they are beekepers or researchers when they sign up

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Grid, Button, Typography, TextField, MenuItem, Select, InputLabel, FormControl } from '@material-ui/core'
import { USER_ACTIONS } from '../redux/actions/userActions'
import { triggerLogout } from '../redux/actions/loginActions'
import { USER_ROLES } from '../redux/actions/userRolesActions'

const mapStateToProps = state => ({
    user: state.user,
    userRoles: state.userRoles,
})

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
})

class SettingsPage extends Component {
    constructor(props) {
        super(props)
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
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER })
        this.props.dispatch({ type: USER_ROLES.FETCH_USER_ROLES })
        this.getUser()
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home')
        }
    }

    getUser = () => {
        this.props.dispatch({
            type: USER_ACTIONS.FETCH_USER,
            payload: this.state.user.id,
        })
    }

    handleInputChangeFor = propertyName => event => {
        this.setState({
            user: {
                ...this.state.user,
                [propertyName]: event.target.value,
            },
        })
    }

    handleSave = event => {
        event.preventDefault()
        this.props.dispatch({
            type: USER_ACTIONS.UPDATE_USER,
            payload: this.state.user,
        })
    }

    render() {
        let content = null

        if (this.props.user.userName) {
            content = (
                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Paper className={this.props.classes.paper}>
                                <Typography variant="h4" gutterBottom>
                                    Settings
                                </Typography>
                                <form onSubmit={this.handleSave}>
                                    <FormControl className={this.props.classes.formControl}>
                                        <InputLabel htmlFor="user_role_id">User Role</InputLabel>
                                        <Select
                                            value={this.state.user.user_role_id}
                                            onChange={this.handleInputChangeFor('user_role_id')}
                                            inputProps={{
                                                name: 'user_role_id',
                                                id: 'user_role_id',
                                            }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {this.props.userRoles.map(userRole => (
                                                <MenuItem key={userRole.id} value={userRole.id}>
                                                    {userRole.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <br />
                                    <TextField
                                        id="username"
                                        label="Username"
                                        className={this.props.classes.textField}
                                        value={this.state.user.username}
                                        onChange={this.handleInputChangeFor('username')}
                                        margin="normal"
                                    />
                                    <br />
                                    <TextField
                                        id="email"
                                        label="Email"
                                        className={this.props.classes.textField}
                                        value={this.state.user.email}
                                        onChange={this.handleInputChangeFor('email')}
                                        margin="normal"
                                    />
                                    <br />
                                    <Button type="submit" variant="contained" color="primary">
                                        Save
                                    </Button>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            )
        }

        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={this.props.classes.paper}>
                            <Typography variant="h4" gutterBottom>
                                Settings
                            </Typography>
                            {content}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default connect(mapStateToProps)(withStyles(styles)(SettingsPage))
