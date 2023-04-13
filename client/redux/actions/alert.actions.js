//this is the alert.actions.js file in the _actions folder

import { alertConstants } from '../constants/index.constants';
import { history } from '../helpers';

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