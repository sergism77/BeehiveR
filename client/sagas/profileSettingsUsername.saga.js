//this is the profileSettingsUsername.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileSettingsUsernameConstants } from '../_constants';
import { profileSettingsUsernameService } from '../_services';
import { alertActions } from './';

export function* profileSettingsUsernameSaga() {
    yield takeEvery(profileSettingsUsernameConstants.UPDATE_REQUEST, update);
}

function* update(action) {
    try {
        const profileSettingsUsername = yield call(profileSettingsUsernameService.update, action.profileId, action.username);
        yield put({ type: profileSettingsUsernameConstants.UPDATE_SUCCESS, profileSettingsUsername });
    } catch (error) {
        yield put({ type: profileSettingsUsernameConstants.UPDATE_FAILURE, error });
        yield put(alertActions.error(error));
    }
}

