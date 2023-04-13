//this is the wiki.helpers.js file in the helpers folder
//
import { wikiConstants } from '../_constants/index.constants';

export const wikiHelpers = {
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
