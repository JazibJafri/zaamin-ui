import React from 'react';
import { RegularInput } from 'components/RegularInput';
import { AuthFormStyles } from './AuthFormContainer.styles';
import { AuthState } from 'screens/AuthForm/AuthForm.types';

type Props = {
    handleOnChange: (p: keyof AuthState, val: string) => void;
};

const AuthSchool: React.FC<Props> = props => {
    return (
        <>
            <RegularInput
                style={AuthFormStyles.input}
                placeholder="School Name"
                onChangeText={val => props.handleOnChange('schoolName', val)}
            />
            <RegularInput
                style={AuthFormStyles.input}
                placeholder="Branch Name"
                onChangeText={val => props.handleOnChange('branchName', val)}
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

export { AuthSchool };
