//this is the login.helper.js file in the _helpers folder

import { adminConstants } from '../_constants';
import { adminService } from '../_services';
import { alertActions } from './';
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
                admin => { 
                    dispatch(success(admin));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(admin) { return { type: adminConstants.LOGIN_REQUEST, admin } }
    function success(admin) { return { type: adminConstants.LOGIN_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.LOGIN_FAILURE, error } }
}

function logout() {
    adminService.logout();
    return { type: adminConstants.LOGOUT };
}

function register(admin) {
    return dispatch => {
        dispatch(request(admin));

        adminService.register(admin)
            .then(
                admin => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(admin) { return { type: adminConstants.REGISTER_REQUEST, admin } }
    function success(admin) { return { type: adminConstants.REGISTER_SUCCESS, admin } }
    function failure(error) { return { type: adminConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        adminService.getAll()
            .then(
                admins => dispatch(success(admins)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: adminConstants.GETALL_REQUEST } }
    function success(admins) { return { type: adminConstants.GETALL_SUCCESS, admins } }
    function failure(error) { return { type: adminConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        adminService.delete(id)
            .then(
                admin => dispatch(success(id)),
                error => dispatch(failure(id, error))
            );
    };

    function request(id) { return { type: adminConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: adminConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: adminConstants.DELETE_FAILURE, id, error } }
}

