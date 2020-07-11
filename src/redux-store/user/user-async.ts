import { createAsyncThunk } from '@reduxjs/toolkit';
import { SignUpState } from 'screens/SignUpForm/SignUpForm.types';
import { AppUsageOptions, AccountTypes } from 'constants/app';
import { urls } from './user-constants';
import { request } from 'services/api-request';
import { API_URLS } from 'services/api-urls';

const login = createAsyncThunk(urls.login, async (userId: string, thunkAPI) => {
    // const response = await userAPI.fetchById(userId);
    // return response.data;
});

interface SignUpPayload extends SignUpState {
    appUsage: AppUsageOptions;
    accountType: AccountTypes;
}

const signUp = createAsyncThunk(urls.signUp, async (payload: SignUpPayload) => {
    const response = await request({
        url: API_URLS.USER.signUp,
        options: { body: payload },
    });
    return response;
});

export const userAsyncActions = {
    login,
    signUp,
};
