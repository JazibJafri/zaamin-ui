import { AuthState, AuthAction } from './AuthForm.types';
export const initialState: AuthState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contact: '',
    branchName: '',
    schoolName: '',
};

export const authActionCreator = (
    property: keyof AuthState,
    value: string,
): AuthAction => ({
    type: 'UPDATE_STATE',
    payload: {
        [property]: value,
    },
});

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'UPDATE_STATE':
            return { ...state, ...action.payload };
        default: {
            return { ...state };
        }
    }
};
