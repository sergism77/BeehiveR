//this is the profileSettingsNotifications.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileSettingsNotificationsConstants } from '../_constants';
import { profileSettingsNotificationsService } from '../_services';
import { alertActions } from './';

export function* profileSettingsNotificationsSaga() {
    yield takeEvery(profileSettingsNotificationsConstants.GETALL_REQUEST, getAll);
}

function* getAll(action) {
    try {
        const profileSettingsNotifications = yield call(profileSettingsNotificationsService.getAll, action.profileId);
        yield put({ type: profileSettingsNotificationsConstants.GETALL_SUCCESS, profileSettingsNotifications });
    } catch (error) {
        yield put({ type: profileSettingsNotificationsConstants.GETALL_FAILURE, error });
        yield put(alertActions.error(error));
    }
}

