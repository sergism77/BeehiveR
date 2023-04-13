//this is the auth-header.helper.js file in the helpers folder

import { authenticationService } from '../_services';

export function authHeader() {

    // return authorization header with jwt token
    let user = authenticationService.userValue;
    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}
