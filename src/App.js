import React, { useContext } from 'react';
import cn from 'classnames';
import { UiContext } from 'Stores';
import Navigation from 'Navigations';
import './App.scss';

const App = () => {
    const { isDarkMode } = useContext(UiContext);

    return (
        <div
            data-testid='app-container'
            className={cn('moneylion-app', {
                'theme--dark': isDarkMode,
                'theme--light': !isDarkMode,
            })}
        >
            <Navigation />
        </div>
    );
};

export default App;
