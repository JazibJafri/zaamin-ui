import { changeLanguage, setDefaultLanguage } from '.';
import { ACTION_TYPES } from 'redux-store/user-preferences/constants';
import { DEFAULT_LANGUAGE } from 'util/constants';

it('creates an action to change language', () => {
    const lang = 'de';
    const expectedAction = {
        type: ACTION_TYPES.CHANGE_LANGUAGE,
        payload: lang,
    };
    expect(changeLanguage(lang)).toEqual(expectedAction);
});

it('creates an action to set default language', () => {
    const expectedAction = {
        type: ACTION_TYPES.SET_DEFAULT_LANGUAGE,
        payload: DEFAULT_LANGUAGE,
    };
    expect(setDefaultLanguage()).toEqual(expectedAction);
});
