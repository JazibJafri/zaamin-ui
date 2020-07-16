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
import { applicationActions } from 'redux-store/application';
import { INVALID_FORM, PLEASE_VERIFY_ALL_FIELDS } from 'constants/text';

type Props = WithStackNavigation<'SignUpForm'>;

const SignUpForm: React.FC<Props> = ({ navigation, route }) => {
    const { setIsAppLoaded } = useContext(AppContext);
    const [state, signUpDispatch] = useReducer<typeof SignUpReducer>(
        SignUpReducer,
        initialState,
    );
    useEffect(() => {
        setTimeout(() => {
            setIsAppLoaded(true);
        }, 1000);
    }, []);

    const dispatch = useAppDispatch();
    const params = {
        accountType: route.params?.accountType || AccountTypes.PARENT,
        appUsage: route.params?.appUsage || AppUsageOptions.PICNIC,
    };
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

    const isFormValid = () => {
        const emailPasswordError = state.emailError || state.passwordError;
        const firstLastNameError = state.firstNameError || state.lastNameError;
        const schoolBranchNameError = state.schoolNameError || state.branchNameError;
        const contactError = state.contactError;
        const personProfileError =
            emailPasswordError || firstLastNameError || contactError;
        const schoolProfileError =
            emailPasswordError || schoolBranchNameError || contactError;
        if (params.appUsage === AppUsageOptions.PICNIC) {
            return !personProfileError;
        }
        if (params.accountType === AccountTypes.SCHOOL) {
            return !schoolProfileError;
        }
        return !personProfileError;
    };

    const handleSubmit = () => {
        if (isFormValid()) {
            dispatch(
                userAsyncActions.signUp({
                    email: state.email,
                    password: state.password,
                    contact: state.contact,
                    firstName: state.firstName,
                    lastName: state.lastName,
                    schoolName: state.schoolName,
                    branchName: state.branchName,
                    accountType: params.accountType,
                    appUsage: params.appUsage,
                }),
            );
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
