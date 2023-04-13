//this is the serverRoutes.js file located at /server/components/serverRoutes.js

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';
import { configureStore } from '../config/init';
import routes from '../routes';
import App from '../components/App';

export default (req, res) => {


    const sheet = new ServerStyleSheet();
    const store = configureStore();
    const branch = matchRoutes(routes, req.url);
    const promises = branch.map(({ route, match }) => {
        let fetchData = route.component.fetchData;
        return fetchData instanceof Function ? fetchData(store, match) : Promise.resolve(null);
    });

    Promise.all(promises).then(data => {
        const context = {};
        const content = renderToString(sheet.collectStyles(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </Provider>
        ));
        const helmet = Helmet.renderStatic();
        const styles = sheet.getStyleTags();
        const preloadedState = store.getState();

        if (context.url) {
            res.writeHead(301, {
                Location: context.url
            });
            res.end();
        } else {
            res.send(renderFullPage(content, preloadedState, helmet, styles));
        }
    });
}

function renderFullPage(html, preloadedState, helmet, styles) {
    return `
        <!doctype html>
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${styles}
            </head>
            <body>
                <div id="root">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script src="/bundle.js"></script>
            </body>
        </html>
        `;
}

