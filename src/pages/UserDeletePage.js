//this is the page that will be rendered when the user clicks on the delete account button
//Remind the user that they are about to delete their account and ask them to confirm
//if they want to delete their account
//remind them that all their data will be deleted and that they will no longer be able to log in
//remind them also about how important it is for the community and research to have them as a member
//they can choose if BeehiveR can keep the data for research purposes, if they want to delete it, or if they want to keep it
//they can also just become inactive so they keep all the data but they are not counted as a member. If that is the case they can become active whenever they want by just logging in again
//if they click yes, then delete their account, log them out, and redirect them to the home page
//if they click no, then redirect them back to where they were before they clicked on the delete account button
//BeehiveR ain't only for the beekeepers, it's also for the researchers
//
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchUser, deleteUser } from '../actions/index';
import UserForm from '../components/UserForm';

class UserDeletePage extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchUser(id);
    }
    
    onSubmit = (formValues) => {
        const { id } = this.props.match.params;
        this.props.deleteUser(id, formValues);
    };
    
    render() {
        return (
        <div>
            <h3>Delete User</h3>
            <UserForm
            initialValues={this.props.user}
            onSubmit={this.onSubmit}
            />
            <Link to="/users">Back to Users</Link>
        </div>
        );
    }
    }

const mapStateToProps = (state, ownProps) => {
    return { user: state.users[ownProps.match.params.id] };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchUser, deleteUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDeletePage);

