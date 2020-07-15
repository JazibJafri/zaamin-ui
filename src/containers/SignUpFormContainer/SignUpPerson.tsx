import React from 'react';
import { RegularInput } from 'components/RegularInput';
import { SignUpFormStyles } from './SignUpFormContainer.styles';
import { SignUpState } from 'screens/SignUpForm/SignUpForm.types';

type Props = {
    handleOnChange: HandleStateChange<SignUpState>;
    state: SignUpState;
};

const SignUpPerson: React.FC<Props> = props => {
    return (
        <>
            <RegularInput
                style={SignUpFormStyles.input}
                placeholder="First Name"
                value={props.state.firstName}
                onChangeText={(val, err) => props.handleOnChange(val, 'firstName', err)}
                validators={['basic']}
            />
            <RegularInput
                style={SignUpFormStyles.input}
                placeholder="Last Name"
                value={props.state.lastName}
                onChangeText={(val, err) => props.handleOnChange(val, 'lastName', err)}
                validators={['basic']}
            />
            <RegularInput
                style={SignUpFormStyles.input}
                placeholder="Contact"
                value={props.state.contact}
                keyboardType="phone-pad"
                onChangeText={(val, err) => props.handleOnChange(val, 'contact', err)}
                validators={['phone']}
            />
        </>
    );
};

export { SignUpPerson };
