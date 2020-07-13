import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { applicationSliceName } from './application-constants';

type AsyncTask = { type: string };

type ApplicationSliceState = {
    asyncTasks: AsyncTask[];
};
const initialState: ApplicationSliceState = {
    asyncTasks: [],
};

const applicationSlice = createSlice({
    name: applicationSliceName,
    initialState,
    reducers: {
        addAsyncTaskAction: (state, action: PayloadAction<AsyncTask>) => {
            state.asyncTasks.push(action.payload);
        },
        removeAsyncTaskAction: (state, action: PayloadAction<AsyncTask>) => {
            let filtered = 0;
            const asyncTasks = state.asyncTasks.filter(task => {
                if (filtered === 0) {
                    if (task.type === action.payload.type) {
                        filtered++;
                        return false;
                    }
                }
                return true;
            });
            return { ...state, asyncTasks };
        },
    },
});

export const {
    actions: applicationActions,
    reducer: applicationReducer,
} = applicationSlice;
