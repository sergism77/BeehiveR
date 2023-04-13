//this is the serverApp.js file in the components folder in the server side

import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { configureStore } from '../config/init';
import routes from '../routes';

export default (req, res) => {
    const sheet = new ServerStyleSheet();
    const store = configureStore();
    const content = renderToString(sheet.collectStyles(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <div>{renderRoutes(routes)}</div>
            </StaticRouter>
        </Provider>
    ));
    const styles = sheet.getStyleTags();
    const preloadedState = store.getState();
    res.send(renderFullPage(content, preloadedState, styles));
}

function renderFullPage(html, preloadedState, styles) {
    return `
        <!doctype html>
        <html>
            <head>
                <title>React Redux Universal Hot Example</title>
                ${styles}
            </head>
            <body>
                <div id="root">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script src="/dist/bundle.js"></script>
            </body>
        </html>
        `;
}

