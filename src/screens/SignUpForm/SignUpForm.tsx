import React, { useEffect, useContext, useReducer } from 'react';
import { useAppDispatch } from 'redux-store';
import { ScrollView } from 'react-native';
import { AppContext } from 'contexts/AppContext';
import { SignUpFormContainer } from 'containers/SignUpFormContainer';
import {
    SignUpReducer,
    initialState,
    signUpActionCreator,
    SIGNUP_ACTIONS,
} from './SignUpForm.reducer';
import { SignUpState } from './SignUpForm.types';
import { AccountTypes, AppUsageOptions } from 'constants/app';
import { userAsyncActions } from 'redux-store/user/user-async';

type Props = WithStackNavigation<'SignUpForm'>;

const SignUpForm: React.FC<Props> = ({ navigation, route }) => {
    const { setIsAppLoaded } = useContext(AppContext);
    const [state, signUpDispatch] = useReducer<typeof SignUpReducer>(
        SignUpReducer,
        initialState,
    );

    const dispatch = useAppDispatch();
    const params = {
        accountType: route.params?.accountType || AccountTypes.PARENT,
        appUsage: route.params?.appUsage || AppUsageOptions.PICNIC,
    };
    console.log(params);
    useEffect(() => {
        setTimeout(() => {
            setIsAppLoaded(true);
        }, 1000);
    }, []);
    const navigate = () => {
        navigation.push('LoginForm');
    };

    const handleOnChange = (
        value: string,
        property: keyof SignUpState,
        err?: boolean,
    ) => {
        signUpDispatch(
            signUpActionCreator(SIGNUP_ACTIONS.UPDATE_STATE, property, value, err),
        );
    };

    const handleSubmit = () => {
        dispatch(
            userAsyncActions.signUp({
                ...state,
                accountType: params.accountType,
                appUsage: params.appUsage,
            }),
        );
    };

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <SignUpFormContainer
                {...params}
                navigate={navigate}
                formState={state}
                onSubmit={handleSubmit}
                handleOnChange={handleOnChange}
            />
        </ScrollView>
    );
};

export { SignUpForm };
