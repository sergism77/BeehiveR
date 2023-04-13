//this is the profileSettingsSecurity.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileSettingsSecurityConstants } from '../_constants';
import { profileSettingsSecurityService } from '../_services';
import { alertActions } from './';

export function* profileSettingsSecuritySaga() {
    yield takeEvery(profileSettingsSecurityConstants.GETALL_REQUEST, getAll);
}

function* getAll(action) {
    try {
        const profileSettingsSecurity = yield call(profileSettingsSecurityService.getAll, action.profileId);
        yield put({ type: profileSettingsSecurityConstants.GETALL_SUCCESS, profileSettingsSecurity });
    } catch (error) {
        yield put({ type: profileSettingsSecurityConstants.GETALL_FAILURE, error });
        yield put(alertActions.error(error));
    }
}

