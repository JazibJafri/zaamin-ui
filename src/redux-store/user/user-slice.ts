import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userAsyncActions } from './user-async';
import { userSliceName } from './user-constants';

const { login, signUp } = userAsyncActions;

type UserSliceState = {
    isLoggedIn: boolean;
    didJustSignedUp: boolean;
};

const initialState: UserSliceState = {
    isLoggedIn: false,
    didJustSignedUp: true,
};
const userSlice = createSlice({
    name: userSliceName,
    initialState,
    reducers: {
        /* Just for example action */
        // login: (state, action) => state,
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            console.log('Login result', action.payload);
            return state;
        });
        builder.addCase(signUp.fulfilled, (state, action) => {
            console.log('Signup Result:', action.payload);
            return state;
        });
        builder.addCase(signUp.rejected, (state, action) => {
            state.isLoggedIn = true;
            state.didJustSignedUp = true;
        });
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
