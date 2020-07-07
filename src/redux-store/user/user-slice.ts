import { createSlice } from '@reduxjs/toolkit';
import { userAsyncActions } from './user-async';

const { login, signUp } = userAsyncActions;

const userSliceName = 'user';

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
