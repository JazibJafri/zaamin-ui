import { userPreferencesReducer } from './reducer';
import { ACTION_TYPES } from 'redux-store/user-preferences/constants';
import { DEFAULT_LANGUAGE } from 'util/constants';

it('returns updated state of reducer', () => {
    const initialState = {
        language: DEFAULT_LANGUAGE,
    };
    const action = {
        type: ACTION_TYPES.CHANGE_LANGUAGE,
        payload: 'de',
    };
    const expected = {
        language: 'de',
    };
    expect(userPreferencesReducer(initialState, action)).toEqual(expected);
});
