import axios from 'axios';

const ROOT_URL = "http://localhost:3000";


export function signInUser({ email, password }) {

    return function (dispath) {

        //submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, { email, password })
        //if the request is good
        //update state to indicate user is authenticated
        //save jwt token

        //redirect to the route '/feature'

        //if request is bad

        //show an error to the user
    }
}