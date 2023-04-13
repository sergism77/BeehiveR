//this is the wiki.service.js file in the services folder

import { wikiConstants } from '../_constants/index.constants';
import { wikiService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const wikiActions = {
    getWiki
};

function getWiki() {
    return dispatch => {
        dispatch(request());

        wikiService.getWiki()
            .then(
                wiki => { 
                    dispatch(success(wiki));
                    history.push('/wiki');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() { return { type: wikiConstants.WIKI_REQUEST } }
    function success(wiki) { return { type: wikiConstants.WIKI_SUCCESS, wiki } }
    function failure(error) { return { type: wikiConstants.WIKI_FAILURE, error } }
}

