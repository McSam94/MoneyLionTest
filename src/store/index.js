import React from 'react';
import { Context as UiContext, Provider as UiProvider } from './ui';
// import { Context as UserContext, Provider as UserProvider } from './user';

const Providers = ({ children }) => {
    return <UiProvider>{children}</UiProvider>;
};

export { Providers, UiContext };
