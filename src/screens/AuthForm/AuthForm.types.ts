export interface AuthState {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    contact: string;
}

export type AuthActionTypes = 'UPDATE_STATE';
export type AuthAction = ActionType<AuthActionTypes, Partial<AuthState>>;
