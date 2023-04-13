//this is the profileMessages.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileMessagesConstants } from '../_constants';
import { profileMessagesService } from '../_services';
import { alertActions } from './';

export function* profileMessagesSaga() {
    yield takeEvery(profileMessagesConstants.GETALL_REQUEST, getAll);
}

function* getAll(action) {
    try {
        const profileMessages = yield call(profileMessagesService.getAll, action.profileId);
        yield put({ type: profileMessagesConstants.GETALL_SUCCESS, profileMessages });
    } catch (error) {
        yield put({ type: profileMessagesConstants.GETALL_FAILURE, error });
        yield put(alertActions.error(error));
    }
}
