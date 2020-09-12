import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userAsyncActions } from './user-async';
import { userSliceName } from './user-constants';
import { AppUsageOptions, AccountTypes } from 'constants/app';

const { login, signUp } = userAsyncActions;

type UserSliceState = {
    isLoggedIn: boolean;
    isNewUser: boolean;
    appUsage: AppUsageOptions;
    accountType: AccountTypes;
    email: string;
    password: string;
    contact: string;
    firstName: string;
    lastName: string;
    schoolName: string;
    branchName: string;
};

const initialState: UserSliceState = {
    isLoggedIn: false,
    isNewUser: true,
    accountType: AccountTypes.PARENT,
    appUsage: AppUsageOptions.SCHOOL,
    branchName: '',
    contact: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    schoolName: '',
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
            return { ...state, ...action.payload };
        });
        builder.addCase(signUp.rejected, (state, action) => {
            console.log('Signup Result:', action.payload);
            return {
                ...state,
                isLoggedIn: true,
                isNewUser: true,
                ...action.payload,
            };
        });
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
