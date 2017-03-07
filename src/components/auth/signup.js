import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignUp extends Component {

    handleFormSubmit({ email, password }) {
        this.props.signInUser({ email, password });
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
                </fieldset>

                <fieldset className="form-group">
                    <label>Password:</label>
                    <input {...password} className="form-control" type="password" />
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

export default reduxForm({
    form: 'signup',
    fields: ["email", "password", "passwordConfirm"]
}, mapStateToProp, actions)(SignUp);