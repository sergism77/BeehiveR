//this is the profileFollowers.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profileFollowersConstants } from '../_constants';
import { profileFollowersService } from '../_services';
import { alertActions } from './';

export function* profileFollowersSaga() {
    yield takeEvery(profileFollowersConstants.GETALL_REQUEST, getAll);
}

function* getAll(action) {
    try {
        const profileFollowers = yield call(profileFollowersService.getAll, action.profileId);
        yield put({ type: profileFollowersConstants.GETALL_SUCCESS, profileFollowers });
    } catch (error) {
        yield put({ type: profileFollowersConstants.GETALL_FAILURE, error });
        yield put(alertActions.error(error));
    }
}

