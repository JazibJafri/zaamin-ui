import { Action } from '@reduxjs/toolkit';
import { RootState as RS } from 'redux-store/root-reducer';
import { AppDispatch } from 'redux-store';

declare global {
    type RootState = RS;

    type WithAppDispatch = AppDispatch;

    interface ActionCreator<ActionType = string, PayloadType = unknown> {
        type: ActionType;
        payload: PayloadType;
    }

    interface ActionType<ActionType = string, PayloadType = unknown>
        extends Action<ActionType> {
        payload?: PayloadType;
    }
}
