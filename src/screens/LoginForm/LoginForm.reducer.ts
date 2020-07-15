import { LoginState, LoginAction, LoginActionTypes } from './LoginForm.types';
export const initialState: LoginState = {
    email: '',
    emailError: true,
    password: '',
    passwordError: true,
};

export enum LOGIN_ACTIONS {
    UPDATE_STATE = 'UPDATE_STATE',
    RESET_STATE = 'RESET_STATE',
}

export const loginActionCreator = (
    type: LoginActionTypes,
    property: keyof LoginState,
    value: string,
    err?: boolean,
): LoginAction => ({
    type,
    payload: {
        [property]: value,
        [`${property}Error`]: err,
    },
});

export const LoginReducer = (state: LoginState, action: LoginAction): LoginState => {
    switch (action.type) {
        case LOGIN_ACTIONS.UPDATE_STATE: {
            return { ...state, ...action.payload };
        }
        default: {
            return { ...state };
        }
    }
};
