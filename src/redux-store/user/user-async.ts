import { createAsyncThunk } from '@reduxjs/toolkit';
import { SignUpFormData } from 'screens/SignUpForm/SignUpForm.types';
import { AppUsageOptions, AccountTypes } from 'constants/app';
import { urls } from './user-constants';
import { request } from 'services/api-request';
import { API_URLS } from 'services/api-urls';
import { LoginFormData } from 'screens/LoginForm/LoginForm.types';

const login = createAsyncThunk(urls.login, async (payload: LoginFormData) => {
    const response = await request({
        url: API_URLS.USER.login,
        options: { body: payload, method: 'POST' },
    });
    return response;
});

interface SignUpPayload extends SignUpFormData {
    appUsage: AppUsageOptions;
    accountType: AccountTypes;
}

const signUp = createAsyncThunk<
    SignUpPayload,
    SignUpPayload,
    { rejectValue: SignUpPayload }
>(urls.signUp, async (payload: SignUpPayload, { rejectWithValue }) => {
    try {
        const response = await request({
            url: API_URLS.USER.signUp,
            options: { body: payload, method: 'POST' },
        });
        return payload;
    } catch (err) {
        return rejectWithValue(payload);
    }
});

export const userAsyncActions = {
    login,
    signUp,
};
