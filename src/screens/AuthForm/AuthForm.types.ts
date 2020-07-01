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

export type AuthActionTypes = 'UPDATE_STATE';
export type AuthAction = ActionType<AuthActionTypes, Partial<AuthState>>;
