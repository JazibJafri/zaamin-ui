import { Dispatch, Action } from '@reduxjs/toolkit';

declare global {
    interface RootState {
        userPreferencesReducer: UserPreferences;
    }

    interface WithDispatch {
        dispatch: Dispatch<ActionCreator>;
    }

    interface ActionCreator {
        type: string;
        payload: unknown;
    }

    interface ActionType extends Action<string> {
        payload?: unknown;
    }
}
