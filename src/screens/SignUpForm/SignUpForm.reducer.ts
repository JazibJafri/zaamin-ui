import { SignUpState, SignUpAction, SignUpActionTypes } from './SignUpForm.types';
export const initialState: SignUpState = {
    firstName: '',
    firstNameError: true,
    lastName: '',
    lastNameError: true,
    email: '',
    emailError: true,
    password: '',
    passwordError: true,
    contact: '',
    contactError: true,
    branchName: '',
    branchNameError: true,
    schoolName: '',
    schoolNameError: true,
};

export enum SIGNUP_ACTIONS {
    UPDATE_STATE = 'UPDATE_STATE',
    RESET_STATE = 'RESET_STATE',
}

export const signUpActionCreator = (
    type: SignUpActionTypes,
    property: keyof SignUpState,
    value: string,
    err?: boolean,
): SignUpAction => ({
    type,
    payload: {
        [property]: value,
        [`${property}Error`]: err,
    },
});

export const SignUpReducer = (state: SignUpState, action: SignUpAction): SignUpState => {
    switch (action.type) {
        case SIGNUP_ACTIONS.UPDATE_STATE: {
            return { ...state, ...action.payload };
        }
        default: {
            return { ...state };
        }
    }
};
