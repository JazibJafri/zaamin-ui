import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthState } from 'screens/AuthForm/AuthForm.types';
import { AppUsageOptions, AccountTypes } from 'constants/app';
import { urls } from './user-constants';

const login = createAsyncThunk(urls.login, async (userId: string, thunkAPI) => {
    // const response = await userAPI.fetchById(userId);
    // return response.data;
});

interface SignUpPayload extends AuthState {
    appUsage: AppUsageOptions;
    accountType: AccountTypes;
}

const signUp = createAsyncThunk(urls.signUp, async (payload: SignUpPayload) => {
    const response = await fetch('https://api.github.com/users/1');
    return await response.json();
});

export const userAsyncActions = {
    login,
    signUp,
};
