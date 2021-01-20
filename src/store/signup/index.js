import { getInitialState } from 'Utils';
import { useReducerContext } from 'Hooks';
import { start, updatePersonal, updateDob, submit, resetSignup } from './signup-actions';
import { SignupReducer } from './signup-reducer';

const STORE_NAME = 'SignupStore';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const { Context, Provider } = useReducerContext({
    reducer: SignupReducer,
    actions: {
        start,
        updatePersonal,
        updateDob,
        submit,
        resetSignup,
    },
    initialState: getInitialState(STORE_NAME) || {
        step: 0,
        personal: {
            firstName: '',
            lastName: '',
            email: '',
        },
        dob: new Date(),
        isSubmitting: false,
        isSubmitted: false,
        errMsg: '',
    },
    displayName: STORE_NAME,
    shouldPersist: true,
});
