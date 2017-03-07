import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class SignOut extends Component {

    componentWillMount() {
        this.props.signoutUser();
        console.log("user is sign out");
    }

    render() {
        return (
            <div>Sorry you see you go</div>
        );
    }
}

export default connect(null, actions)(SignOut)