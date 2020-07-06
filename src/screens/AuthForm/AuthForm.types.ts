import { AUTH_ACTIONS } from './AuthForm.reducer';

export interface AuthState extends ParentTransporterAuthState, SchoolAuthState {
    email: string;
    password: string;
    contact: string;
}

interface ParentTransporterAuthState {
    firstName: string;
    lastName: string;
}
interface SchoolAuthState {
    schoolName: string;
    branchName: string;
}

export type AuthActionTypes = keyof typeof AUTH_ACTIONS;
export type AuthAction = ActionType<AuthActionTypes, Partial<AuthState>>;
