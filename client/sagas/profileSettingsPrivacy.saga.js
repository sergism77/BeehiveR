//this is the profileSettingsPrivacy.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileSettingsPrivacyConstants } from '../_constants';
import { profileSettingsPrivacyService } from '../_services';
import { alertActions } from './';

export function* profileSettingsPrivacySaga() {
    yield takeEvery(profileSettingsPrivacyConstants.GETALL_REQUEST, getAll);
}

function* getAll(action) {
    try {
        const profileSettingsPrivacy = yield call(profileSettingsPrivacyService.getAll, action.profileId);
        yield put({ type: profileSettingsPrivacyConstants.GETALL_SUCCESS, profileSettingsPrivacy });
    } catch (error) {
        yield put({ type: profileSettingsPrivacyConstants.GETALL_FAILURE, error });
        yield put(alertActions.error(error));
    }
}

