import React, { useReducer } from 'react';
import { ScrollView } from 'react-native';
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
import { applicationActions } from 'redux-store/application';
import { INVALID_FORM, PLEASE_VERIFY_ALL_FIELDS } from 'constants/text';

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
            dispatch(
                applicationActions.toggleErrorMessage({
                    show: true,
                    title: INVALID_FORM,
                    content: PLEASE_VERIFY_ALL_FIELDS,
                }),
            );
        }
    };

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            keyboardShouldPersistTaps="handled"
        >
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
