import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from "../actions";

class Feature extends Component {

    componentWillMount() {
        this.props.fetchMessage();
    }

    render() {
        return (
            <h1>{this.props.message}</h1>
        );
    }
}
function mapStateToProps(state) {
    return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);