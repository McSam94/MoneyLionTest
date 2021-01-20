import React, { useContext } from 'react';
import cn from 'classnames';
import { UiContext } from 'Stores';
import { Main } from 'Pages';
import './App.scss';

const App = () => {
    const { isDarkMode } = useContext(UiContext);

    return (
        <div
            className={cn('moneylion-app', {
                'theme--dark': isDarkMode,
                'theme--light': !isDarkMode,
            })}
        >
            <Main />
        </div>
    );
};

export default App;
