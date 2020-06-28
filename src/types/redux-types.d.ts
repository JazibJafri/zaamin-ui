import { Dispatch, Action } from '@reduxjs/toolkit';

declare global {
    interface RootState {
        userPreferencesReducer: UserPreferences;
    }

    interface WithDispatch {
        dispatch: Dispatch<ActionCreator>;
    }

    interface ActionCreator<ActionType = string, PayloadType = unknown> {
        type: ActionType;
        payload: PayloadType;
    }

    interface ActionType<ActionType = string, PayloadType = unknown>
        extends Action<ActionType> {
        payload?: PayloadType;
    }
}
