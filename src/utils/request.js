export const createRequestAction = (action) => {
    return {
        REQUEST: `${action}_request`,
        SUCCESS: `${action}_success`,
        FAIL: `${action}_fail`,
    };
};

export const RESPONSE_STATUS = Object.freeze({
    SUCCESS: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    UNAUTHORIZE: 401,
});
