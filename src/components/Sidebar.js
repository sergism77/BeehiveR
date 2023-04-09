//this is the Sidebar.js file located in the src/components folder

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__header">
                    <div className="sidebar__header__title">
                        <h1>React Redux</h1>
                    </div>
                </div>
                <div className="sidebar__content">
                    <ul className="sidebar__content__list">
                        <li className="sidebar__content__list__item">
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li className="sidebar__content__list__item">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="sidebar__content__list__item">
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    };
}

const connectedSidebar = connect(mapStateToProps)(Sidebar);
export { connectedSidebar as Sidebar };

