import { LOGIN_ACTIONS } from './LoginForm.reducer';

export interface LoginState {
    email: string;
    emailError: boolean;
    password: string;
    passwordError: boolean;
}

export type LoginActionTypes = keyof typeof LOGIN_ACTIONS;
export type LoginAction = ActionType<LoginActionTypes, Partial<LoginState>>;
