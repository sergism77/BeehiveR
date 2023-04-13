//this is the Header.js file in the components folder

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions/userActions';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
        const { user, loggedIn } = this.props;
        return (
            <header className="header">
                <div className="header__content">
                    <div className="header__logo">
                        <Link to="/">React Redux</Link>
                    </div>
                    <div className="header__menu">
                        <div className="header__menu__button" onClick={this.showMenu}>
                            <i className="fa fa-bars"></i>
                        </div>
                        {
                            this.state.showMenu
                                ? (
                                    <nav className="header__menu__nav">
                                        <ul>
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact</Link>
                                            </li>
                                            {
                                                loggedIn
                                                    ? (
                                                        <li>
                                                            <Link to="/profile">Profile</Link>
                                                        </li>
                                                    )
                                                    : null
                                            }
                                            {
                                                loggedIn
                                                    ? (
                                                        <li>
                                                            <Link to="/logout">Logout</Link>
                                                        </li>
                                                    )
                                                    : (
                                                        <li>
                                                            <Link to="/login">Login</Link>
                                                        </li>
                                                    )
                                            }
                                        </ul>
                                    </nav>
                                )
                                : (
                                    null
                                )
                        }
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    const { loggedIn } = state.authentication;
    return {
        loggedIn
    };
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };
