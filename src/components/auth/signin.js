import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignIn extends Component {

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
        const { fields: { email, password }, handleSubmit } = this.props;

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

                {this.renderAlert()}

                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

function mapStateToProp(state) {
    return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'singin',
    fields: ["email", "password"]
}, mapStateToProp, actions)(SignIn);