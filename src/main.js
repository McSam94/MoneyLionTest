import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { debugContextDevtool } from 'react-context-devtool';
import { Providers } from 'Stores';
import App from './App';

const appContainer = document.getElementById('app');

ReactDOM.render(
    <StrictMode>
        <Suspense fallback={'Loading...'}>
            <Providers>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Providers>
        </Suspense>
    </StrictMode>,
    appContainer,
);

debugContextDevtool(appContainer, {
    debugReducer: true,
    debugContext: true,
    disable: process.env.NODE_ENV === 'production',
});
