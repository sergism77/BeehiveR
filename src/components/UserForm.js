//this is the user form component

import React from 'react';
import { Field, reduxForm } from 'redux-form';

class UserForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="name" component={this.renderInput} label="Enter Name" />
                <Field name="email" component={this.renderInput} label="Enter Email" />
                <Field name="phone" component={this.renderInput} label="Enter Phone" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
        errors.name = 'You must enter a name';
    }
    if (!formValues.email) {
        errors.email = 'You must enter an email';
    }
    if (!formValues.phone) {
        errors.phone = 'You must enter a phone number';
    }
    return errors;
}

export default reduxForm({
    form: 'userForm',
    validate
})(UserForm);
