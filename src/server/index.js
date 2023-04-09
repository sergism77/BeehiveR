//this is the server side code

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ReduxProvider from './providers/provider';


ReactDOM.render(
    <BrowserRouter>
        <ReduxProvider>
            <App />
        </ReduxProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();

