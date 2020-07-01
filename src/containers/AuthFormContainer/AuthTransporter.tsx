import React from 'react';
import { RegularInput } from 'components/RegularInput';
import { AuthFormStyles } from './AuthFormContainer.styles';
import { AuthState } from 'screens/AuthForm/AuthForm.types';

type Props = {
    handleOnChange: (p: keyof AuthState, val: string) => void;
};

const AuthTransporter: React.FC<Props> = props => {
    return (
        <>
            <RegularInput
                style={AuthFormStyles.input}
                placeholder="First Name"
                onChangeText={val => props.handleOnChange('firstName', val)}
            />
            <RegularInput
                style={AuthFormStyles.input}
                placeholder="Last Name"
                onChangeText={val => props.handleOnChange('lastName', val)}
            />
            <RegularInput
                style={AuthFormStyles.input}
                placeholder="Contact"
                keyboardType="number-pad"
                onChangeText={val => props.handleOnChange('contact', val)}
            />
        </>
    );
};

export { AuthTransporter };
