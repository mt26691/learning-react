import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignUp extends Component {

    handleFormSubmit(formProps) {
        this.props.signUpUser(formProps);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>OOP!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }
    render() {
        const { fields: { email, password, passwordConfirm }, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input {...email} className="form-control" />
                    {email.touched && email.error && <div className="error">{email.error}</div>}
                </fieldset>

                <fieldset className="form-group">
                    <label>Password:</label>
                    <input {...password} className="form-control" type="password" />
                    {password.touched && password.error && <div className="error">{password.error}</div>}
                </fieldset>

                <fieldset className="form-group">
                    <label>Password Confirm:</label>
                    <input {...passwordConfirm} className="form-control" type="password" />
                  
                </fieldset>

                {this.renderAlert()}

                <button action="submit" className="btn btn-primary">Sign un</button>
            </form>
        );
    }
}

function mapStateToProp(state) {
    return { errorMessage: state.auth.error };
}
function validate(formProps) {
    const errors = {};

    if (!formProps.email) {
        errors.email = "Please enter email";
    }

    if (!formProps.password) {
        errors.password = "Please enter a password";
    }

    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = "Please enter a password confirmation";
    }

    if (formProps.password !== formProps.passwordConfirm) {
        errors.password = "Password must match";
    }

    return errors;
}
export default reduxForm({
    form: 'signup',
    fields: ["email", "password", "passwordConfirm"],
    validate: validate
}, mapStateToProp, actions)(SignUp);