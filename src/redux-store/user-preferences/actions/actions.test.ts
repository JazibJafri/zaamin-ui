import { ACTION_TYPES } from 'redux-store/user-preferences/constants';
import { actions } from './actions';

it('dispatches action to change language', () => {
    const dispatchMock = jest.fn();
    const action = {
        type: ACTION_TYPES.CHANGE_LANGUAGE,
        payload: 'new lang',
    };
    actions.changeLanguage({ dispatch: dispatchMock, newLanguage: 'new lang' });
    const expectedCalls = 1;
    expect(dispatchMock).toBeCalledTimes(expectedCalls);
    expect(dispatchMock).toBeCalledWith(action);
});
