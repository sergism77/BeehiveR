//this is the page that will be rendered when the user clicks on the add user as a friend button

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchUser, updateUser } from '../actions/index';
import UserForm from '../components/UserForm';

class UserEditPage extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchUser(id);
    }
    
    onSubmit = (formValues) => {
        const { id } = this.props.match.params;
        this.props.updateUser(id, formValues);
    };
    
    render() {
        return (
        <div>
            <h3>Edit User</h3>
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
    return bindActionCreators({ fetchUser, updateUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditPage);

