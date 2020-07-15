import React from 'react';
import { RegularInput } from 'components/RegularInput';
import { SignUpFormStyles } from './SignUpFormContainer.styles';
import { SignUpState } from 'screens/SignUpForm/SignUpForm.types';

type Props = {
    handleOnChange: HandleStateChange<SignUpState>;
    state: SignUpState;
};

const SignUpSchool: React.FC<Props> = props => {
    return (
        <>
            <RegularInput
                style={SignUpFormStyles.input}
                placeholder="School Name"
                value={props.state.schoolName}
                onChangeText={(val, err) => props.handleOnChange(val, 'schoolName', err)}
                validators={['basic']}
            />
            <RegularInput
                style={SignUpFormStyles.input}
                placeholder="Branch Name"
                value={props.state.branchName}
                onChangeText={(val, err) => props.handleOnChange(val, 'branchName', err)}
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

export { SignUpSchool };
