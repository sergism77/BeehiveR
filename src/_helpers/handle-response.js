//this is the handle-response.js file
//this is the file that will handle all of the responses from the server
//what do we need to export from this file?
//we need to export a handleResponse function
//what should the handleResponse function do?
//it should take in a response
//it should check if the response is ok
//if the response is ok, it should return the response
//if the response is not ok, it should return an error
//it should check if the response is a 401
//if the response is a 401, it should logout the user
//if the response is not a 401, it should return an error
//it should check if the response is a 400
//if the response is a 400, it should return an error
//if the response is not a 400, it should return an error
//it should check if the response is a 404
//if the response is a 404, it should return an error
//if the response is not a 404, it should return an error
//it should check if the response is a 500
//if the response is a 500, it should return an error
//if the response is not a 500, it should return an error
//it should check if the response is a 503
//if the response is a 503, it should return an error
//if the response is not a 503, it should return an error
//it should check if the response is a 504
//if the response is a 504, it should return an error
//if the response is not a 504, it should return an error
//it should check if the response is a 422
//if the response is a 422, it should return an error
//if the response is not a 422, it should return an error
//it should check if the response is a 429
//if the response is a 429, it should return an error
//if the response is not a 429, it should return an error
//it should check if the response is a 403
//if the response is a 403, it should return an error
//if the response is not a 403, it should return an error
//it should check if the response is a 405
//if the response is a 405, it should return an error
//if the response is not a 405, it should return an error
//it should check if the response is a 406
//if the response is a 406, it should return an error
//if the response is not a 406, it should return an error
//it should check if the response is a 409
//if the response is a 409, it should return an error
//if the response is not a 409, it should return an error
//it should check if the response is a 410
//if the response is a 410, it should return an error
//if the response is not a 410, it should return an error
//it should check if the response is a 411
//if the response is a 411, it should return an error
//if the response is not a 411, it should return an error
//it should check if the response is a 412
//if the response is a 412, it should return an error
//if the response is not a 412, it should return an error
//it should check if the response is a 413
//if the response is a 413, it should return an error
//if the response is not a 413, it should return an error
//it should check if the response is a 414
//if the response is a 414, it should return an error
//if the response is not a 414, it should return an error
//it should check if the response is a 415
//if the response is a 415, it should return an error
//if the response is not a 415, it should return an error
//it should check if the response is a 416
//if the response is a 416, it should return an error
//if the response is not a 416, it should return an error
//it should check if the response is a 417
//if the response is a 417, it should return an error
//if the response is not a 417, it should return an error
//it should check if the response is a 418
//if the response is a 418, it should return an error
//if the response is not a 418, it should return an error
//it should check if the response is a 419
//if the response is a 419, it should return an error
//if the response is not a 419, it should return an error
//it should check if the response is a 420
//if the response is a 420, it should return an error

import { authenticationService } from '../_services/authentication.service';

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                authenticationService.logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
