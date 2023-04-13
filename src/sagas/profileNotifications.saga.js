//this is the profileNotifications.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileNotificationsConstants } from '../_constants';
import { profileNotificationsService } from '../_services';
import { alertActions } from './';

export function* profileNotificationsSaga() {
    yield takeEvery(profileNotificationsConstants.GETALL_REQUEST, getAll);
}

function* getAll(action) {
    try {
        const profileNotifications = yield call(profileNotificationsService.getAll, action.profileId);
        yield put({ type: profileNotificationsConstants.GETALL_SUCCESS, profileNotifications });
    } catch (error) {
        yield put({ type: profileNotificationsConstants.GETALL_FAILURE, error });
        yield put(alertActions.error(error));
    }
}

