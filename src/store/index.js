import React from 'react';
import { Context as UiContext, Provider as UiProvider } from './ui';
import { Context as SignupContext, Provider as SignupProvider } from './signup';

const Providers = ({ children }) => {
    return (
        <UiProvider>
            <SignupProvider>{children}</SignupProvider>
        </UiProvider>
    );
};

export { Providers, UiContext, SignupContext };
