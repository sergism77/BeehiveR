//this is the profileSettingsPassword.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileSettingsPasswordConstants } from '../_constants';
import { profileSettingsPasswordService } from '../_services';
import { alertActions } from './';

export function* profileSettingsPasswordSaga() {
    yield takeEvery(profileSettingsPasswordConstants.UPDATE_REQUEST, update);
}

function* update(action) {
    try {
        const profileSettingsPassword = yield call(profileSettingsPasswordService.update, action.profileId, action.password);
        yield put({ type: profileSettingsPasswordConstants.UPDATE_SUCCESS, profileSettingsPassword });
    } catch (error) {
        yield put({ type: profileSettingsPasswordConstants.UPDATE_FAILURE, error });
        yield put(alertActions.error(error));
    }
}

