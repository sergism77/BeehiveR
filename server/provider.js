//this is the provider.js in the server folder

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const ReduxProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default ReduxProvider;
