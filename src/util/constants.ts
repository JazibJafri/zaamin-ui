import { OK, MULTI_STATUS } from 'http-status-codes';

export const COMMON_HEADERS = {};

export const POST_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

export const ResponseTypes = {
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
};

export const SuccessRange = {
    START: OK,
    END: MULTI_STATUS,
};

export const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

export const DEFAULT_LANGUAGE = 'en';
