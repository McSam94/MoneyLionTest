/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from 'react';

export const uiAction = Object.freeze({
    TOGGLE_DARK_MODE: 'toggleDarkMode',
});

export const toggleDarkMode = (dispatch) => {
    return useCallback(() => {
        dispatch({ type: uiAction.TOGGLE_DARK_MODE });
    }, [dispatch]);
};
