import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthState } from 'screens/AuthForm/AuthForm.types';
import { AppUsageOptions, AccountTypes } from 'constants/app';

const login = createAsyncThunk(`user/login`, async (userId: string, thunkAPI) => {
    // const response = await userAPI.fetchById(userId);
    // return response.data;
});

interface SignUpPayload extends AuthState {
    appUsage: AppUsageOptions;
    accountType: AccountTypes;
}

const signUp = createAsyncThunk(`user/signup`, async (payload: SignUpPayload) => {
    return Promise.resolve(payload);
});

export const userAsyncActions = {
    login,
    signUp,
};
