//this is the wikiReducer.js file in the reducers folder
//the wikiReducer will be used to store the wiki articles in the database   
//the wikiReducer will be used to display the wiki articles on the wiki page
//the wikiReducer will be used to display the wiki articles on the wiki article page

import axios from 'axios';

const initialState = {
    wiki: '',
    wikiArticles: [],
    wikiArticle: '',
    wikiArticleTitle: '',
    wikiArticleContent: '',
    wikiArticleId: '',
    wikiArticleAuthor: '',
    wikiArticleDate: '',
    wikiArticleEditDate: '',
    wikiArticleEditAuthor: '',
    wikiArticleEditContent: '',
    wikiArticleEditTitle: '',
    wikiArticleEditId: '',
    wikiArticleEditAuthorId: '',
    wikiArticleEditDate: '',
    wikiArticleEditContent: '',
    wikiArticleEditTitle: '',
    wikiArticleEditId: '',
    wikiArticleEditAuthorId: '',
}

const GET_WIKI = 'GET_WIKI';
const GET_WIKI_ARTICLES = 'GET_WIKI_ARTICLES';
const GET_WIKI_ARTICLE = 'GET_WIKI_ARTICLE';
const GET_WIKI_ARTICLE_TITLE = 'GET_WIKI_ARTICLE_TITLE';
const GET_WIKI_ARTICLE_CONTENT = 'GET_WIKI_ARTICLE_CONTENT';
const GET_WIKI_ARTICLE_ID = 'GET_WIKI_ARTICLE_ID';
const GET_WIKI_ARTICLE_AUTHOR = 'GET_WIKI_ARTICLE_AUTHOR';
const GET_WIKI_ARTICLE_DATE = 'GET_WIKI_ARTICLE_DATE';
const GET_WIKI_ARTICLE_EDIT_DATE = 'GET_WIKI_ARTICLE_EDIT_DATE';
const GET_WIKI_ARTICLE_EDIT_AUTHOR = 'GET_WIKI_ARTICLE_EDIT_AUTHOR';
const GET_WIKI_ARTICLE_EDIT_CONTENT = 'GET_WIKI_ARTICLE_EDIT_CONTENT';
const GET_WIKI_ARTICLE_EDIT_TITLE = 'GET_WIKI_ARTICLE_EDIT_TITLE';
const GET_WIKI_ARTICLE_EDIT_ID = 'GET_WIKI_ARTICLE_EDIT_ID';
const GET_WIKI_ARTICLE_EDIT_AUTHOR_ID = 'GET_WIKI_ARTICLE_EDIT_AUTHOR_ID';

export default function wikiReducer(state = initialState, action) {
    switch (action.type) {
        case GET_WIKI:
            return Object.assign({}, state, { wiki: action.payload });
        case GET_WIKI_ARTICLES:
            return Object.assign({}, state, { wikiArticles: action.payload });
        case GET_WIKI_ARTICLE:
            return Object.assign({}, state, { wikiArticle: action.payload });
        case GET_WIKI_ARTICLE_TITLE:
            return Object.assign({}, state, { wikiArticleTitle: action.payload });
        case GET_WIKI_ARTICLE_CONTENT:
            return Object.assign({}, state, { wikiArticleContent: action.payload });
        case GET_WIKI_ARTICLE_ID:
            return Object.assign({}, state, { wikiArticleId: action.payload });
        case GET_WIKI_ARTICLE_AUTHOR:
            return Object.assign({}, state, { wikiArticleAuthor: action.payload });
        case GET_WIKI_ARTICLE_DATE:
            return Object.assign({}, state, { wikiArticleDate: action.payload });
        case GET_WIKI_ARTICLE_EDIT_DATE:
            return Object.assign({}, state, { wikiArticleEditDate: action.payload });
        case GET_WIKI_ARTICLE_EDIT_AUTHOR:
            return Object.assign({}, state, { wikiArticleEditAuthor: action.payload });
        case GET_WIKI_ARTICLE_EDIT_CONTENT:
            return Object.assign({}, state, { wikiArticleEditContent: action.payload });
        case GET_WIKI_ARTICLE_EDIT_TITLE:
            return Object.assign({}, state, { wikiArticleEditTitle: action.payload });
        case GET_WIKI_ARTICLE_EDIT_ID:
            return Object.assign({}, state, { wikiArticleEditId: action.payload });
        case GET_WIKI_ARTICLE_EDIT_AUTHOR_ID:
            return Object.assign({}, state, { wikiArticleEditAuthorId: action.payload });
        default:
            return state;
    }
}

export function getWiki() {
    return {
        type: GET_WIKI,
        payload: axios.get('/api/wiki')
    }
}

export function getWikiArticles() {
    return {
        type: GET_WIKI_ARTICLES,
        payload: axios.get('/api/wiki/articles')
    }
}

export function getWikiArticle(id) {
    return {
        type: GET_WIKI_ARTICLE,
        payload: axios.get(`/api/wiki/article/${id}`)
    }
}

export function getWikiArticleTitle(title) {
    return {
        type: GET_WIKI_ARTICLE_TITLE,
        payload: axios.get(`/api/wiki/article/title/${title}`)
    }
}

export function getWikiArticleContent(content) {
    return {
        type: GET_WIKI_ARTICLE_CONTENT,
        payload: axios.get(`/api/wiki/article/content/${content}`)
    }
}

export function getWikiArticleId(id) {
    return {
        type: GET_WIKI_ARTICLE_ID,
        payload: axios.get(`/api/wiki/article/id/${id}`)
    }
}

export function getWikiArticleAuthor(author) {
    return {
        type: GET_WIKI_ARTICLE_AUTHOR,
        payload: axios.get(`/api/wiki/article/author/${author}`)
    }
}

export function getWikiArticleDate(date) {
    return {
        type: GET_WIKI_ARTICLE_DATE,
        payload: axios.get(`/api/wiki/article/date/${date}`)
    }
}

export function getWikiArticleEditDate(date) {
    return {
        type: GET_WIKI_ARTICLE_EDIT_DATE,
        payload: axios.get(`/api/wiki/article/edit/date/${date}`)
    }
}

export function getWikiArticleEditAuthor(author) {
    return {
        type: GET_WIKI_ARTICLE_EDIT_AUTHOR,
        payload: axios.get(`/api/wiki/article/edit/author/${author}`)
    }
}

export function getWikiArticleEditContent(content) {
    return {
        type: GET_WIKI_ARTICLE_EDIT_CONTENT,
        payload: axios.get(`/api/wiki/article/edit/content/${content}`)
    }
}

export function getWikiArticleEditTitle(title) {
    return {
        type: GET_WIKI_ARTICLE_EDIT_TITLE,
        payload: axios.get(`/api/wiki/article/edit/title/${title}`)
    }
}

export function getWikiArticleEditId(id) {
    return {
        type: GET_WIKI_ARTICLE_EDIT_ID,
        payload: axios.get(`/api/wiki/article/edit/id/${id}`)
    }
}

export function getWikiArticleEditAuthorId(id) {
    return {
        type: GET_WIKI_ARTICLE_EDIT_AUTHOR_ID,
        payload: axios.get(`/api/wiki/article/edit/author/id/${id}`)
    }
}
