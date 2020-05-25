/* Absolute Imports */
import { ACTION_TYPES } from 'redux-store/user-preferences/constants';
import { DEFAULT_LANGUAGE } from 'util/constants';
import { createReducer } from '@reduxjs/toolkit';

const initState: UserPreferences = { language: DEFAULT_LANGUAGE };

const userPreferencesReducer = createReducer(initState, {
    [ACTION_TYPES.CHANGE_LANGUAGE]: (state: UserPreferences, action: ActionType) => {
        state.language = action.payload as string;
    },
    [ACTION_TYPES.SET_DEFAULT_LANGUAGE]: (state: UserPreferences, action: ActionType) => {
        state.language = action.payload as string;
    },
});

export { userPreferencesReducer };
