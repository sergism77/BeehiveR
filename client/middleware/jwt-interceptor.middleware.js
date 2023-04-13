//this is the middleware that will intercept the request and add the token to the header
//this is the jwt-interceptor.js file in the middleware folder

import { adminConstants } from '../_constants';
import { history } from '../_helpers';

export function jwtInterceptor() {
    // return authorization header with jwt token
    let admin = JSON.parse(localStorage.getItem(adminConstants.ADMIN));

    if (admin && admin.token) {
        return { 'Authorization': 'Bearer ' + admin.token };
    } else {
        return {};
    }
}

