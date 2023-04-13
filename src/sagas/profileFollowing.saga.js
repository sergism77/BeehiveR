//this is the profileFollowing.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileFollowingConstants } from '../_constants';
import { profileFollowingService } from '../_services';
import { alertActions } from './';

export function* profileFollowingSaga() {
    yield takeEvery(profileFollowingConstants.GETALL_REQUEST, getAll);
}

function* getAll(action) {
    try {
        const profileFollowing = yield call(profileFollowingService.getAll, action.profileId);
        yield put({ type: profileFollowingConstants.GETALL_SUCCESS, profileFollowing });
    } catch (error) {
        yield put({ type: profileFollowingConstants.GETALL_FAILURE, error });
        yield put(alertActions.error(error));
    }
}

