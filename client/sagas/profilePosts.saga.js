this is the profilePosts.saga.js file in the sagas folder

import { takeEvery, call, put } from 'redux-saga/effects';
import { profilePostsConstants } from '../_constants';
import { profilePostsService } from '../_services';
import { alertActions } from './';

export function* profilePostsSaga() {
    yield takeEvery(profilePostsConstants.GETALL_REQUEST, getAll);
}

function* getAll(action) {
    try {
        const profilePosts = yield call(profilePostsService.getAll, action.profileId);
        yield put({ type: profilePostsConstants.GETALL_SUCCESS, profilePosts });
    } catch (error) {
        yield put({ type: profilePostsConstants.GETALL_FAILURE, error });
        yield put(alertActions.error(error));
    }
}

