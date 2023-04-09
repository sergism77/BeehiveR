    //this is the DashboardPage.js file in the pages folder

    import React from 'react';
    import { Link } from 'react-router-dom';
    import { connect } from 'react-redux';
    import { userActions } from '../_actions';

    class DashboardPage extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                user: {
                    username: '',
                    password: '',
                    email: ''
                },
                submitted: false
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(e) {
            const { name, value } = e.target;
            const { user } = this.state;
            this.setState({
                user: {
                    ...user,
                    [name]: value
                }
            });
        }

        handleSubmit(e) {
            e.preventDefault();

            this.setState({ submitted: true });
            const { user } = this.state;
            const { dispatch } = this.props;
            if (user.username && user.password && user.email) {
                dispatch(userActions.register(user));
            }
        }

        render() {
            const { registering  } = this.props;
            const { user, submitted } = this.state;
            return (
                <div className="col-md-6 col-md-offset-3">
                    <h2>Dashboard</h2>
                    <p>You're logged in with React & JWT!!</p>
                    <h3>Users from secure api end point:</h3>
                    {users.loading && <em>Loading users...</em>}
                    {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                    {users.items &&
                        <ul>
                            {users.items.map((user, index) =>
                                <li key={user.id}>{user.firstName + ' ' + user.lastName}</li>
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

    const connectedDashboardPage = connect(mapStateToProps)(DashboardPage);
    export { connectedDashboardPage as DashboardPage };

    