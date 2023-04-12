//this is the wiki.actions.js file in the actions folder

import axios from 'axios';

export const GET_WIKI = 'GET_WIKI';
export const GET_WIKI_ARTICLES = 'GET_WIKI_ARTICLES';
export const GET_WIKI_ARTICLE = 'GET_WIKI_ARTICLE';
export const GET_WIKI_ARTICLE_TITLE = 'GET_WIKI_ARTICLE_TITLE';
export const GET_WIKI_ARTICLE_CONTENT = 'GET_WIKI_ARTICLE_CONTENT';
export const GET_WIKI_ARTICLE_ID = 'GET_WIKI_ARTICLE_ID';
export const GET_WIKI_ARTICLE_AUTHOR = 'GET_WIKI_ARTICLE_AUTHOR';
export const GET_WIKI_ARTICLE_DATE = 'GET_WIKI_ARTICLE_DATE';

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
