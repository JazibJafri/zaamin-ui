import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSliceNamespace } from './user-slice';

const login = createAsyncThunk(
    getSliceNamespace('login'),
    async (userId: string, thunkAPI) => {
        // const response = await userAPI.fetchById(userId);
        // return response.data;
    },
);

export const userAsyncActions = {
    login,
};
