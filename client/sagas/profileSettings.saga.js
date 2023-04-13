//this is the profileSettings.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileSettingsConstants } from '../_constants';
import { profileSettingsService } from '../_services';
import { alertActions } from './';

export function* profileSettingsSaga() {
    yield takeEvery(profileSettingsConstants.GETALL_REQUEST, getAll);
}

function* getAll(action) {
    try {
        const profileSettings = yield call(profileSettingsService.getAll, action.profileId);
        yield put({ type: profileSettingsConstants.GETALL_SUCCESS, profileSettings });
    } catch (error) {
        yield put({ type: profileSettingsConstants.GETALL_FAILURE, error });
        yield put(alertActions.error(error));
    }
}
