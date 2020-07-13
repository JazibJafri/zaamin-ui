import React, { useReducer } from 'react';
import { ScrollView, Alert } from 'react-native';
import { useAppDispatch } from 'redux-store';
import { LoginFormContainer } from 'containers/LoginFormContainer';
import { LoginState } from './LoginForm.types';
import {
    LoginReducer,
    initialState,
    loginActionCreator,
    LOGIN_ACTIONS,
} from './LoginForm.reducer';
import { userAsyncActions } from 'redux-store/user/user-async';

type Props = WithStackNavigation<'LoginForm'>;

const LoginForm: React.FC<Props> = ({ navigation }) => {
    const [state, loginDispatch] = useReducer<typeof LoginReducer>(
        LoginReducer,
        initialState,
    );
    const dispatch = useAppDispatch();
    const navigate = () => {
        navigation.push('AppUsage');
    };

    const handleOnChange = (value: string, property: keyof LoginState, err?: boolean) => {
        loginDispatch(
            loginActionCreator(LOGIN_ACTIONS.UPDATE_STATE, property, value, err),
        );
    };

    const isFormValid = () => {
        const emailPasswordError = state.emailError || state.passwordError;
        return !emailPasswordError;
    };

    const handleSubmit = () => {
        if (isFormValid()) {
            const { email, password } = state;
            dispatch(userAsyncActions.login({ email, password }));
        } else {
            Alert.alert('Invalid Form', 'Please fix all errors');
        }
    };

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <LoginFormContainer
                navigate={navigate}
                formState={state}
                onSubmit={handleSubmit}
                handleOnChange={handleOnChange}
            />
        </ScrollView>
    );
};

export { LoginForm };
