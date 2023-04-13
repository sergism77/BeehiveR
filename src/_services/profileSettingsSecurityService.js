//this is the profileSettingsSecurityService.js file in the _services folder

import { authHeader } from '../_helpers';

export const profileSettingsSecurityService = {
    getAll,
    update
};

function getAll(profileId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/api/profiles/${profileId}/settings/security`, requestOptions).then(handleResponse);
}

function update(profileSettingsSecurity) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(profileSettingsSecurity)
    };

    return fetch(`/api/profiles/${profileSettingsSecurity.profileId}/settings/security`, requestOptions).then(handleResponse);
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
    localStorage.removeItem('user');
}

