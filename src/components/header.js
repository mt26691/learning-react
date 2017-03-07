import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
    remderLinks() {
        if (this.props.authenticated) {
            //show a link to sign out
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/sign-out">Sign out</Link>
                </li>);
        }
        else {
            //show a link to sign in or sign up
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/sign-in">Sign in</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/sign-un">Sign un</Link>
                </li>
            ];
        }

    }
    render() {
        return (
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">Redux Auth</Link>
                <ul className="nav navbar-nav">
                    {this.remderLinks()}
                </ul>
            </nav>
        );
    }
}

function mapStateToprop(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToprop)(Header);