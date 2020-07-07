import React, { useEffect, useContext, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
import { AppContext } from 'contexts/AppContext';
import { AuthFormContainer } from 'containers/AuthFormContainer';
import {
    AuthReducer,
    initialState,
    authActionCreator,
    AUTH_ACTIONS,
} from './AuthForm.reducer';
import * as Text from 'constants/text';
import { AuthState } from './AuthForm.types';
import { AccountTypes, AppUsageOptions } from 'constants/app';
import { userAsyncActions } from 'redux-store/user/user-async';

type Props = WithStackNavigation<'AuthForm'>;

const AuthForm: React.FC<Props> = ({ navigation, route }) => {
    const { setIsAppLoaded } = useContext(AppContext);
    const [state, authDispatch] = useReducer<typeof AuthReducer>(
        AuthReducer,
        initialState,
    );

    const dispatch = useDispatch();
    const params = {
        isSignUp: !!route.params?.isSignUp,
        accountType: route.params?.accountType || AccountTypes.PARENT,
        appUsage: route.params?.appUsage || AppUsageOptions.PICNIC,
        title: route.params?.isSignUp ? Text.SIGNUP : Text.LOGIN,
        message: route.params?.isSignUp
            ? Text.ALREADY_REGISTERED
            : Text.DONT_HAVE_AN_ACCOUNT,
        messageButtonText: route.params?.isSignUp ? Text.LOGIN : Text.SIGNUP,
    };

    useEffect(() => {
        setTimeout(() => {
            setIsAppLoaded(true);
        }, 1000);
    }, []);
    const navigate = () => {
        const navigateTo = params.isSignUp ? 'AuthForm' : 'AppUsage';
        const props = { isSignUp: !params.isSignUp };
        navigation.push(navigateTo, props);
    };

    const handleOnChange = (value: string, property: keyof AuthState) => {
        authDispatch(authActionCreator(AUTH_ACTIONS.UPDATE_STATE, property, value));
    };

    const handleSubmit = () => {
        if (params.isSignUp) {
            dispatch(
                userAsyncActions.signUp({
                    ...state,
                    accountType: params.accountType,
                    appUsage: params.appUsage,
                }),
            );
        } else {
            console.log('Login');
        }
    };

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <AuthFormContainer
                {...params}
                navigate={navigate}
                state={state}
                onSubmit={handleSubmit}
                handleOnChange={handleOnChange}
            />
        </ScrollView>
    );
};

export { AuthForm };
