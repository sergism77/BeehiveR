//this is the auth-header.js file in the _helpers folder
//what do we need to import here?
//we need to import the adminConstants from the _constants folder
//we need to import the userConstants from the _constants folder
//we need to import the adminService from the _services folder
//we need to import the userService from the _services folder
//we need to import the alertActions from the _actions folder
//we need to import the history from the _helpers folder
//we need to import the userConstants from the _constants folder


import { adminConstants } from '../_constants';
import { adminService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';
import { userConstants } from '../_constants';
import { userService } from '../_services';


export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}

