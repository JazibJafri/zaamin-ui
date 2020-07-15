import { SIGNUP_ACTIONS } from './SignUpForm.reducer';

export interface SignUpState extends PersonSignUpState, SchoolSignUpState {
    email: string;
    emailError: boolean;
    password: string;
    passwordError: boolean;
    contact: string;
    contactError: boolean;
}

interface PersonSignUpState {
    firstName: string;
    firstNameError: boolean;
    lastName: string;
    lastNameError: boolean;
}
interface SchoolSignUpState {
    schoolName: string;
    schoolNameError: boolean;
    branchName: string;
    branchNameError: boolean;
}

export type SignUpFormData = Omit<
    SignUpState,
    | 'emailError'
    | 'passwordError'
    | 'contactError'
    | 'firstNameError'
    | 'lastNameError'
    | 'schoolNameError'
    | 'branchNameError'
>;

export type SignUpActionTypes = keyof typeof SIGNUP_ACTIONS;
export type SignUpAction = ActionType<SignUpActionTypes, Partial<SignUpState>>;
