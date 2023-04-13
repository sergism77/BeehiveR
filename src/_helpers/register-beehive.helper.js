//this is the register-beehive.helper.js file in the _helpers folder

import { registerConstants } from '../_constants';
import { registerService } from '../_services';
import { alertActions } from './';

export const registerActions = {
    register
};

function register(beehive) {
    return dispatch => {
        dispatch(request(beehive));

        registerService.register(beehive)
            .then(
                beehive => { 
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

    function request(beehive) { return { type: registerConstants.REGISTER_REQUEST, beehive } }
    function success(beehive) { return { type: registerConstants.REGISTER_SUCCESS, beehive } }
    function failure(error) { return { type: registerConstants.REGISTER_FAILURE, error } }
}

