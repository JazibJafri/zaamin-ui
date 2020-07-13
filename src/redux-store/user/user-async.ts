import { createAsyncThunk } from '@reduxjs/toolkit';
import { SignUpState } from 'screens/SignUpForm/SignUpForm.types';
import { AppUsageOptions, AccountTypes } from 'constants/app';
import { urls } from './user-constants';
import { request } from 'services/api-request';
import { API_URLS } from 'services/api-urls';
import { LoginState } from 'screens/LoginForm/LoginForm.types';

type LoginPayload = Pick<LoginState, 'email' | 'password'>;

const login = createAsyncThunk(urls.login, async (payload: LoginPayload) => {
    const response = await request({
        url: API_URLS.USER.login,
        options: { body: payload, method: 'POST' },
    });
    return response;
});

interface SignUpPayload extends SignUpState {
    appUsage: AppUsageOptions;
    accountType: AccountTypes;
}

const signUp = createAsyncThunk(urls.signUp, async (payload: SignUpPayload) => {
    const response = await request({
        url: API_URLS.USER.signUp,
        options: { body: payload, method: 'POST' },
    });
    return response;
});

export const userAsyncActions = {
    login,
    signUp,
};
