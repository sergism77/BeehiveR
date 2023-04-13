//this is the landingPage.js in the src/components/pages folder
//this page will be the first page that the user will see when they visit the app
//from this page, the user will be able to navigate to other pages or login/signup
//this page should display a short description of the app and a button to login/signup
//from this page, users can navigate to a more detailed help page with detailed information about the app and all of its features 

//1 - we should import the React component from the react library
//2 - we should import the Component component from the react library
//3 - we should import the Link component from the react-router-dom library
//4 - we should import the connect function from the react-redux library
//5 - we should import the userActions from the _actions folder
//6 - we should import the history from the _helpers folder
//7 - we should import the alertActions from the _actions folder
//8 - we should import the Alert component from the components folder
//9 - we should import the ConnectedIntlProvider component from the components folder
//10 - we should import the FormattedMessage component from the react-intl library
//11 - we should import the FormattedHTMLMessage component from the react-intl library
//12 - we should import the FormattedNumber component from the react-intl library
//13 - we should import the FormattedDate component from the react-intl library
//14 - we should import the FormattedTime component from the react-intl library
//15 - we should import the FormattedRelative component from the react-intl library
//16 - we should import the FormattedPlural component from the react-intl library
//17 - we should import the FormattedMessage component from the react-intl library

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import { history } from '../../_helpers';
import { alertActions } from '../../_actions';
import { Alert } from '../../components/alert';
import { ConnectedIntlProvider } from '../../components/connectedIntlProvider';
import { FormattedMessage } from 'react-intl';
import { FormattedHTMLMessage } from 'react-intl';
import { FormattedNumber } from 'react-intl';
import { FormattedDate } from 'react-intl';
import { FormattedTime } from 'react-intl';
import { FormattedRelative } from 'react-intl';
import { FormattedPlural } from 'react-intl';
import { FormattedMessage } from 'react-intl';

//we should create a class called LandingPage that extends the Component class
//we should create a constructor method that takes in props as an argument
//we should call the super method and pass in props as an argument
//we should set the state of the component to an object with a key of user and a value of an empty object
//we should bind the methods to the component
//we should create a handleDeleteUser method
//we should call the delete method from the userActions object
//we should pass in the id of the user as an argument
//we should pass in a callback function as the second argument
//we should call the dispatch method from the props object
//we should pass in the result of the delete method as an argument
//we should call the then method on the result of the delete method
//we should pass in the callback function as an argument
//we should call the history method from the history object
//we should pass in the path of the login page as an argument
//we should call the alertActions.success method
//we should pass in a string as an argument
//we should call the alertActions.error method
//we should pass in a string as an argument
//we should create a render method
//we should return a div with a className of container
//we should return a div with a className of row
//we should return a div with a className of col-md-6 col-md-offset-3
//we should return a h1 tag
//we should return a p tag
//we should return a button tag
//we should pass in a className of btn btn-primary
//we should pass in an onClick attribute and set it equal to the handleDeleteUser method
//we should return a Link component
//we should pass in a className of btn btn-link
//we should pass in a to attribute and set it equal to the path of the login page
//we should return a Link component

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        };

        this.handleDeleteUser = this.handleDeleteUser.bind(this);
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h1>Hi {user.firstName}!</h1>
                        <p>You're logged in with React & JWT!!</p>
                        <p>
                            <Link to="/login" className="btn btn-link">Logout</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

//we should export the LandingPage component by calling the connect function
//we should pass in null as the first argument
//we should pass in an object with a key of userActions and a value of the userActions object as the second argument
//we should pass in the LandingPage component as the third argument

export default connect(null, { userActions })(LandingPage);
