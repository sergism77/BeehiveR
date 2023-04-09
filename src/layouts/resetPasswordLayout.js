// this is the resetPasswordLayout.js file located in the src/layouts folder

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../_actions';

class ResetPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            confirmPassword: '',
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
        const { password, confirmPassword } = this.state;
        const { dispatch } = this.props;
        if (password && confirmPassword) {
            dispatch(userActions.resetPassword(password, confirmPassword));
        }
    }

    render() {
        const { password, confirmPassword, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Reset Password</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !confirmPassword ? ' has-error' : '')}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
                        {submitted && !confirmPassword &&
                            <div className="help-block">Confirm Password is required</div>
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

const connectedResetPassword = connect(mapStateToProps)(ResetPassword);
export { connectedResetPassword as ResetPassword };

// Path: src/_actions/user.actions.js