import { uiAction } from './ui-actions';

export const UIReducer = (state, action) => {
    switch (action.type) {
        case uiAction.TOGGLE_DARK_MODE:
            return {
                ...state,
                isDarkMode: !state.isDarkMode,
            };
        default:
            throw new Error('Invalid Action');
    }
};
