import React, { useEffect, useContext, useReducer } from 'react';
import { ScrollView } from 'react-native';
import { AppContext } from 'contexts/AppContext';
import { AuthFormContainer } from 'containers/AuthFormContainer';
import { AuthReducer, initialState, authActionCreator } from './AuthForm.reducer';
import * as Text from 'constants/text';
import { AuthState } from './AuthForm.types';
import { AccountTypes } from 'constants/app';

type Props = WithStackNavigation<'AuthForm'>;

const AuthForm: React.FC<Props> = ({ navigation, route }) => {
    const { setIsAppLoaded } = useContext(AppContext);
    const [state, dispatch] = useReducer<typeof AuthReducer>(AuthReducer, initialState);

    const params = {
        isSignUp: !!route.params?.isSignUp,
        accountType: route.params?.accountType || AccountTypes.PARENT,
        appUsage: route.params?.appUsage,
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
        navigation.navigate(navigateTo, props);
    };

    const handleOnChange = (value: string, property: keyof AuthState) => {
        dispatch(authActionCreator(property, value));
    };

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <AuthFormContainer
                {...params}
                navigate={navigate}
                state={state}
                handleOnChange={handleOnChange}
            />
        </ScrollView>
    );
};

export { AuthForm };
