//this is the profileSettingsDelete.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileSettingsDeleteConstants } from '../_constants';
import { profileSettingsDeleteService } from '../_services';
import { alertActions } from './';

export function* profileSettingsDeleteSaga() {
    yield takeEvery(profileSettingsDeleteConstants.GETALL_REQUEST, getAll);
}

function* getAll(action) {
    try {
        const profileSettingsDelete = yield call(profileSettingsDeleteService.getAll, action.profileId);
        yield put({ type: profileSettingsDeleteConstants.GETALL_SUCCESS, profileSettingsDelete });
    } catch (error) {
        yield put({ type: profileSettingsDeleteConstants.GETALL_FAILURE, error });
        yield put(alertActions.error(error));
    }
}

