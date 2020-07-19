import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { applicationSliceName } from './application-constants';

type AsyncTask = { type: string };
type ErrorMessage = {
    show: boolean;
    title: string;
    content: string;
    onClose?: 'default' | 'exit-app';
};

type ApplicationSliceState = {
    asyncTasks: AsyncTask[];
    error: ErrorMessage;
};
const initialState: ApplicationSliceState = {
    asyncTasks: [],
    error: {
        show: false,
        title: '',
        content: '',
        onClose: 'default',
    },
};

const applicationSlice = createSlice({
    name: applicationSliceName,
    initialState,
    reducers: {
        addAsyncTask: (state, action: PayloadAction<AsyncTask>) => {
            state.asyncTasks.push(action.payload);
        },
        removeAsyncTask: (state, action: PayloadAction<AsyncTask>) => {
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
        toggleErrorMessage: (state, action: PayloadAction<ErrorMessage>) => {
            state.error = action.payload;
        },
    },
});

export const {
    actions: applicationActions,
    reducer: applicationReducer,
} = applicationSlice;
