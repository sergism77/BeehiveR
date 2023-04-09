//this is the layout for the dashboard page

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Dashboard } from '../../components/pages/Dashboard';
import { Profile } from '../../components/pages/Profile';
import { Settings } from '../../components/pages/Settings';
import { NotFound } from '../../components/pages/NotFound';
import { Switch, Route } from 'react-router-dom';
import { ConnectedIntlProvider } from '../../components';
import { Alert } from '../../components';
import { PrivateRoute } from '../../components';
import mariadb from 'mariadb';
import config from 'config.json';
const dbConfig = config.database;
let pool = mariadb.createPool(dbConfig);

export default pool;



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