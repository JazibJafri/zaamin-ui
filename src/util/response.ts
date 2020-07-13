import { getStatusText, OK, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { ResponseTypes, SuccessRange } from 'util/constants';

enum StatusCodes {
    SUCCESS = OK,
    FAILURE = INTERNAL_SERVER_ERROR,
}

const responseIsSuccess = (code: number) =>
    code >= SuccessRange.START && code <= SuccessRange.END;

const getMessageByStatusCode = (type: StatusCodes, code?: number) => {
    try {
        if (code) return getStatusText(code);
        throw type;
    } catch (err) {
        return getStatusText(type);
    }
};

const createSuccessResponse = ({
    code,
    data,
    error,
}: ResponseParams): ResponseObject => ({
    code: code || OK,
    data: data || {},
    type: ResponseTypes.SUCCESS,
    error: {
        message: error?.message || getMessageByStatusCode(StatusCodes.SUCCESS, code),
    },
});

const createErrorResponse = ({ code, data, error }: ResponseParams): ResponseObject => ({
    code: code || INTERNAL_SERVER_ERROR,
    data: data || {},
    type: ResponseTypes.FAILURE,
    error: {
        message: error?.message || getMessageByStatusCode(StatusCodes.FAILURE, code),
    },
});

const responseCreator = async (response: Response) => {
    if (responseIsSuccess(response.status)) {
        return createSuccessResponse({
            code: response.status,
            data: await response.json(),
        });
    }
    return createErrorResponse({
        code: response.status,
        error: new Error(response.statusText),
    });
};

export { createSuccessResponse, createErrorResponse, responseCreator };
