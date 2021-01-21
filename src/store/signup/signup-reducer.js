import { signupAction } from './signup-actions';

export const SignupReducer = (state, action) => {
    switch (action.type) {
        case signupAction.START:
            return {
                ...state,
                step: 1,
            };
        case signupAction.UPDATE_PERSONAL:
            return {
                ...state,
                step: 2,
                personal: action?.payload?.personal,
            };
        case signupAction.UPDATE_DOB:
            return {
                ...state,
                step: 3,
                dob: action?.payload?.dob,
            };
        case signupAction.SUBMIT.REQUEST:
            return {
                ...state,
                isSubmitting: true,
            };
        case signupAction.SUBMIT.SUCCESS:
            return {
                ...state,
                step: 4,
                isSubmitting: false,
                isSubmitted: false,
                errMsg: '',
            };
        case signupAction.SUBMIT.FAIL:
            return {
                ...state,
                isSubmitting: false,
                isSubmitted: false,
                errMsg: action?.payload?.errMsg,
            };
        case signupAction.RESET_SIGNUP:
            return {
                ...state,
                step: 0,
                personal: {
                    firstName: '',
                    lastName: '',
                    email: '',
                },
                dob: new Date(),
            };
        default:
            throw new Error('Invalid Action');
    }
};
