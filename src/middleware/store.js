//this is the store.js in the middleware folder


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../_reducers';
import { createLogger } from 'redux-logger';
const logger = createLogger();
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);


