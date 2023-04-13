//this is logger.js file in the middleware folder

import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../_reducers';

const logger = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

