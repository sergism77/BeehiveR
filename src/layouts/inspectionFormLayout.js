//this is the inspection form layout
//this file will be the template for all inspection forms
//this template will be reused every time we create a new inspection form
//only registered users can create new inspection forms
//only registered users can edit existing inspection forms
//only registered users can delete existing inspection forms
//only registered users can view existing inspection forms
//this layout will be used when the user is logged in
//this layout will allow beekeepers to log inspections and save them to the database
//we are using the latest bootstrap version onn the whole BeehiveR web app
//create all needed functions and components for the inspection form
//create all needed components for the inspection form
//create all needed actions for the inspection form

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class InspectionFormLayout extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
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

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedInspectionFormLayout = connect(mapStateToProps)(InspectionFormLayout);
export { connectedInspectionFormLayout as InspectionFormLayout };
