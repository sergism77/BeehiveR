//this is the wiki.reducer.js file in the reducers folder

import { wikiConstants } from '../_constants/index.constants';

export function wiki(state = {}, action) {
    switch (action.type) {
        case wikiConstants.WIKI_REQUEST:
        return {
            loading: true,
            wiki: action.wiki
        };
        case wikiConstants.WIKI_SUCCESS:
        return {
            loaded: true,
            wiki: action.wiki
        };
        case wikiConstants.WIKI_FAILURE:
        return {};
        default:
        return state
    }
    }
