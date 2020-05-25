import { combineReducers } from 'redux';
import { userPreferencesReducer } from './user-preferences/reducers';

const rootReducer = combineReducers({
    userPreferencesReducer,
});

export { rootReducer };
