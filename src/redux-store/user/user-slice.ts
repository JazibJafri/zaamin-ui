import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userAsyncActions } from './user-async';
import { userSliceName } from './user-constants';

const { login, signUp } = userAsyncActions;

const userSlice = createSlice({
    name: userSliceName,
    initialState: {},
    reducers: {
        /* Just for example action */
        login: (state, action) => state,
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            return state;
        });
        builder.addCase(signUp.fulfilled, (state, action) => {
            return state;
        });
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
