//this is the register-beehive.service.js file in the _services folder

import { authHeader } from '../_helpers';
import { config } from '../_config';

export const registerService = {
    register
};

function register(beehive) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(beehive)
    };

    return fetch(`${config.apiUrl}/beehives/register`, requestOptions)
        .then(handleResponse)
        .then(beehive => {
            return beehive;
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
    localStorage.removeItem('beehive');
}

