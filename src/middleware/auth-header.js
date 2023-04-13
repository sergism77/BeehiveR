//this is the middleware that will be used to check if the user is logged in or not
//this is the auth-header.js file in the middleware folder

import { adminConstants } from '../_constants';

export function authHeader() {
    // return authorization header with jwt token
    let admin = JSON.parse(localStorage.getItem(adminConstants.ADMIN));

    if (admin && admin.token) {
        return { 'Authorization': 'Bearer ' + admin.token };
    } else {
        return {};
    }
}

