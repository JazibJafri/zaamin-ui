/* Absolute Imports */
import { ACTION_TYPES } from 'redux-store/user-preferences/constants';
import { DEFAULT_LANGUAGE } from 'util/constants';

export const changeLanguage = (payload: string): ActionCreator => ({
    type: ACTION_TYPES.CHANGE_LANGUAGE,
    payload,
});

export const setDefaultLanguage = (): ActionCreator => ({
    type: ACTION_TYPES.SET_DEFAULT_LANGUAGE,
    payload: DEFAULT_LANGUAGE,
});
