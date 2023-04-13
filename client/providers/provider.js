//this is the provider class

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import firebase from '../config/fbConfig';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

const ReduxProvider = (props) => {
    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                {props.children}
            </ReactReduxFirebaseProvider>
        </Provider>
    )
}

export default ReduxProvider;

//we should now go to the src/layouts/index.js file
