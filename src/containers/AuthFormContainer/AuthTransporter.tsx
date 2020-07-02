import React from 'react';
import { RegularInput } from 'components/RegularInput';
import { AuthFormStyles } from './AuthFormContainer.styles';
import { AuthState } from 'screens/AuthForm/AuthForm.types';

type Props = {
    handleOnChange: HandleStateChange<AuthState>;
    state: AuthState;
};

const AuthTransporter: React.FC<Props> = props => {
    return (
        <>
            <RegularInput
                style={AuthFormStyles.input}
                placeholder="First Name"
                value={props.state.firstName}
                onChangeText={val => props.handleOnChange(val, 'firstName')}
                validators={['basic']}
            />
            <RegularInput
                style={AuthFormStyles.input}
                placeholder="Last Name"
                value={props.state.lastName}
                onChangeText={val => props.handleOnChange(val, 'lastName')}
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

export { AuthTransporter };
