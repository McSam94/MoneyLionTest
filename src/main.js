import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { debugContextDevtool } from 'react-context-devtool';
import { Providers } from 'Stores';
import App from './App';

const appContainer = document.getElementById('app');

console.log(BASE_URL);
console.log(DEBUG);

ReactDOM.render(
    <StrictMode>
        <Suspense fallback={'Loading...'}>
            <Providers>
                <HashRouter>
                    <App />
                </HashRouter>
            </Providers>
        </Suspense>
    </StrictMode>,
    appContainer,
);

debugContextDevtool(appContainer, {
    debugReducer: true,
    debugContext: true,
    disable: !DEBUG,
});
