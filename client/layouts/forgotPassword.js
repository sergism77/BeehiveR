//this is the forgotPassword.js file located in the layouts folder

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../_actions';

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email } = this.state;
        const { dispatch } = this.props;
        if (email) {
            dispatch(userActions.forgotPassword(email));
        }
    }

    render() {
        const { email, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Forgot Password</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
                        {submitted && !email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Submit</button>
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedForgotPassword = connect(mapStateToProps)(ForgotPassword);
export { connectedForgotPassword as ForgotPassword };

