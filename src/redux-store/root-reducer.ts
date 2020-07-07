import { combineReducers } from 'redux';
import { userReducer } from './user';

// Add reducer here for typescript
export const reducers = {
    userReducer: 'userReducer',
};

const rootReducer = combineReducers({
    userReducer,
});

export { rootReducer };
