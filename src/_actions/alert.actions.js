//this is the alert.actions.js file in the _actions folder

import { alertConstants } from '../_constants';
import { history } from '../_helpers';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}