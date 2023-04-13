//this is the admin.actions.js file in the _actions folder

import { adminConstants } from '../_constants/index.constants';
import { adminService } from '../_services';
import { alertActions } from './index.actions';
import { history } from '../_helpers';

export const adminActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        adminService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: adminConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: adminConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: adminConstants.LOGIN_FAILURE, error } }
}

function logout() {
    adminService.logout();
    return { type: adminConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        adminService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: adminConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: adminConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: adminConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        adminService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: adminConstants.GETALL_REQUEST } }
    function success(users) { return { type: adminConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: adminConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript

function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        adminService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: adminConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: adminConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: adminConstants.DELETE_FAILURE, id, error } }
}

// Path: src/_actions/index.js