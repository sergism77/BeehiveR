//this is the profileSettingsBlockedUsers.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileSettingsBlockedUsersConstants } from '../_constants';
import { profileSettingsBlockedUsersService } from '../_services';
import { alertActions } from './';

export function* profileSettingsBlockedUsersSaga() {
    yield takeEvery(profileSettingsBlockedUsersConstants.GETALL_REQUEST, getAll);
}

function* getAll(action) {
    try {
        const profileSettingsBlockedUsers = yield call(profileSettingsBlockedUsersService.getAll, action.profileId);
        yield put({ type: profileSettingsBlockedUsersConstants.GETALL_SUCCESS, profileSettingsBlockedUsers });
    } catch (error) {
        yield put({ type: profileSettingsBlockedUsersConstants.GETALL_FAILURE, error });
        yield put(alertActions.error(error));
    }
}
