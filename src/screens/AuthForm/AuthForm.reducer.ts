import { AuthState, AuthAction, AuthActionTypes } from './AuthForm.types';
export const initialState: AuthState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contact: '',
    branchName: '',
    schoolName: '',
};

export enum AUTH_ACTIONS {
    UPDATE_STATE = 'UPDATE_STATE',
    RESET_STATE = 'RESET_STATE',
}

export const authActionCreator = (
    type: AuthActionTypes,
    property: keyof AuthState,
    value: string,
): AuthAction => ({
    type,
    payload: {
        [property]: value,
    },
});

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AUTH_ACTIONS.UPDATE_STATE:
            return { ...state, ...action.payload };
        default: {
            return { ...state };
        }
    }
};
