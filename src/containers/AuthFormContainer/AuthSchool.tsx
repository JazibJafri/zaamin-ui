import React from 'react';
import { RegularInput } from 'components/RegularInput';
import { AuthFormStyles } from './AuthFormContainer.styles';
import { AuthState } from 'screens/AuthForm/AuthForm.types';

type Props = {
    handleOnChange: HandleStateChange<AuthState>;
    state: AuthState;
};

const AuthSchool: React.FC<Props> = props => {
    return (
        <>
            <RegularInput
                style={AuthFormStyles.input}
                placeholder="School Name"
                value={props.state.schoolName}
                onChangeText={val => props.handleOnChange(val, 'schoolName')}
                validators={['basic']}
            />
            <RegularInput
                style={AuthFormStyles.input}
                placeholder="Branch Name"
                value={props.state.branchName}
                onChangeText={val => props.handleOnChange(val, 'branchName')}
                validators={['basic']}
            />
            <RegularInput
                style={AuthFormStyles.input}
                placeholder="Contact"
                value={props.state.contact}
                keyboardType="phone-pad"
                onChangeText={val => props.handleOnChange(val, 'contact')}
                validators={['phone']}
            />
        </>
    );
};

export { AuthSchool };
