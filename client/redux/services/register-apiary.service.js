//this is the register-apiary.service.js file in the _services folder

import { authHeader } from '../_helpers';
import { config } from '../_config';

export const registerService = {
    register
};

function register(apiary) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apiary)
    };

    return fetch(`${config.apiUrl}/apiaries/register`, requestOptions)
        .then(handleResponse)
        .then(apiary => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('apiary', JSON.stringify(apiary));

            return apiary;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('apiary');
}
