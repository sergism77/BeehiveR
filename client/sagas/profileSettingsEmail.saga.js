//this is the profileSettingsEmail.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileSettingsEmailConstants } from '../_constants';
import { profileSettingsEmailService } from '../_services';
import { alertActions } from './';

export function* profileSettingsEmailSaga() {
    yield takeEvery(profileSettingsEmailConstants.UPDATE_REQUEST, update);
}

function* update(action) {
    try {
        const profileSettingsEmail = yield call(profileSettingsEmailService.update, action.profileId, action.email);
        yield put({ type: profileSettingsEmailConstants.UPDATE_SUCCESS, profileSettingsEmail });
    } catch (error) {
        yield put({ type: profileSettingsEmailConstants.UPDATE_FAILURE, error });
        yield put(alertActions.error(error));
    }
}

