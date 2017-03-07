import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = "http://localhost:3000";


export function signInUser({ email, password }) {

    return function (dispath) {

        //submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                //if the request is good

                //update state to indicate user is authenticated
                dispath({ type: AUTH_USER });
                //save jwt token
                localStorage.setItem("token", response.data.token);
                //redirect to the route '/feature'
                browserHistory.push("/feature");
            })
            .catch(error => {
                //if request is bad

                //show an error to the user
                dispath(authError("Bad login info"));
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}