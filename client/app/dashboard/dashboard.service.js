//this is the dashboard.service.js file
//this is the service file for the dashboard
//this is the file that will handle all of the logic for the dashboard
//what do we need to export from this file?
//we need to export a dashboardService object
//what should the dashboardService object contain?
//it should contain a BehaviorSubject that will hold the current user
//it should contain a BehaviorSubject that will hold the current user's posts
//it should contain a BehaviorSubject that will hold the current user's comments
//it should contain a BehaviorSubject that will hold the current user's likes
//it should contain a BehaviorSubject that will hold the current user's followers
//it should contain a BehaviorSubject that will hold the current user's following
//it should contain a BehaviorSubject that will hold the current user's notifications
//it should contain a BehaviorSubject that will hold the current user's settings
//it should contain a BehaviorSubject that will hold the current user's profile
//it should contain a BehaviorSubject that will hold the current user's profile picture
//it should contain a BehaviorSubject that will hold the current user's cover photo
//it should contain a BehaviorSubject that will hold the current user's bio
//it should contain a BehaviorSubject that will hold the current user's location
//it should contain a BehaviorSubject that will hold the current user's website
//it should contain a BehaviorSubject that will hold the current user's email



import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { handleResponse } from '../_helpers/handle-response';
import { authHeader } from '../_helpers/auth-header';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const dashboardService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`users/register`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`users/${id}`, requestOptions).then(handleResponse);
}
