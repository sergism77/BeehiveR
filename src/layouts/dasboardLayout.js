//this is the layout for the dashboard page
//this layout must be easy to use and easy to understand
//it must be responsive
//it must be easy to maintain
//it must be easy to add new features
//it must be easy to add new pages
//it must be easy to add new components
//it must be easy to add new actions
//it must be easy to add new reducers
//it must be easy to add new services
//it must be easy to add new middlewares
//it must be easy to add new helpers
//it must be easy to add new constants
//it must be easy to add new routes
//it must be easy to add new layouts
//it must be easy to add new themes
//it must be easy to add new styles
//it must be easy to add new images
//it must be easy to add new icons
//it must be easy to add new fonts
//it must be easy to add new animations
//it must be easy to add new translations
//it must be easy to add new languages
//it must be easy to add new tests
//it must be easy to add new stories
//it must be easy to add new snapshots
//it must be easy to add new configurations
//it must be easy to add new settings
//it must be easy to add new environments
//it must be easy to add new variables
//it must be easy to add new types
//it must be easy to add new interfaces
//it must be easy to add new classes
//it must be easy to add new functions

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Dashboard } from '../../components/pages/Dashboard';

//what else should we import in this file?
//1. we should import the Dashboard component from the components/pages folder
//2. we should import the userActions from the _actions folder
//3. we should import the connect function from the react-redux library
//4. we should import the Link component from the react-router-dom library

//what should we do in this file?
//1. we should create a class called DashboardLayout
//2. we should create a function called mapStateToProps
//3. we should create a function called connectedDashboardLayout
//4. we should export the connectedDashboardLayout function

class DashboardLayout extends React.Component {
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

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedDashboardLayout = connect(mapStateToProps)(DashboardLayout);
export { connectedDashboardLayout as DashboardLayout };

