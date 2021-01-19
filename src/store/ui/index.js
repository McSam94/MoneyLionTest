import { getInitialState } from 'Utils';
import { useReducerContext } from 'Hooks';
import { toggleDarkMode } from './ui-actions';
import { UIReducer } from './ui-reducer';

const STORE_NAME = 'UIStore';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const { Context, Provider } = useReducerContext({
    reducer: UIReducer,
    actions: {
        toggleDarkMode,
    },
    initialState: getInitialState(STORE_NAME) || {
        isDarkMode: false,
    },
    displayName: STORE_NAME,
});
