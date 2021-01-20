import { useCallback } from 'react';
import { createRequestAction, RESPONSE_STATUS } from 'Utils';
import { SignupSrv } from 'Services';

export const signupAction = Object.freeze({
    START: 'start',
    UPDATE_PERSONAL: 'update_personal',
    UPDATE_DOB: 'update_dob',
    SUBMIT: createRequestAction('submit'),
    RESET_SIGNUP: 'reset_signup',
});

export const start = (dispatch) => {
    return useCallback(() => {
        dispatch({ type: signupAction.START });
    }, [dispatch]);
};

export const updatePersonal = (dispatch) => {
    return useCallback(
        (personal) => {
            dispatch({ type: signupAction.UPDATE_PERSONAL, payload: { personal } });
        },
        [dispatch],
    );
};

export const updateDob = (dispatch) => {
    return useCallback(
        ({ dob }) => {
            dispatch({ type: signupAction.UPDATE_DOB, payload: { dob } });
        },
        [dispatch],
    );
};

export const submit = (dispatch) => {
    return useCallback(
        async (data) => {
            console.log(data);
            dispatch({ type: signupAction.SUBMIT.REQUEST });

            try {
                const result = await SignupSrv.submit(data);

                if (result.status === RESPONSE_STATUS.CREATED) {
                    dispatch({ type: signupAction.SUBMIT.SUCCESS });
                } else {
                    dispatch({
                        type: signupAction.SUBMIT.FAIL,
                        payload: {
                            errMsg: result?.data?.message,
                        },
                    });
                }
            } catch (error) {
                dispatch({
                    type: signupAction.SUBMIT.FAIL,
                    payload: {
                        errMsg: error?.message,
                    },
                });
            }
        },
        [dispatch],
    );
};

export const resetSignup = (dispatch) => {
    return useCallback(() => {
        dispatch({ type: signupAction.RESET_SIGNUP });
    }, [dispatch]);
};
