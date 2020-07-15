import { combineReducers } from 'redux';
import { userReducer } from './user';
import { applicationReducer } from './application';

// Add reducer here for typescript
export const reducers = {
    userReducer: 'userReducer',
    applicationReducer: 'applicationReducer',
};

const rootReducer = combineReducers({
    userReducer,
    applicationReducer,
});

export { rootReducer };

export type RootState = ReturnType<typeof rootReducer>;
