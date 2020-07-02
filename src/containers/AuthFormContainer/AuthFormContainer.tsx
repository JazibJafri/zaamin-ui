import React from 'react';
import { View, Image } from 'react-native';
import { RegularInput } from 'components/RegularInput';
import { Images } from 'images';
import {
    AuthFormStyles,
    socialButtons,
    submitButton,
    messageButton,
} from './AuthFormContainer.styles';
import { RegularText } from 'components/RegularText';
import { Button } from 'components/Button';
import { AuthState } from 'screens/AuthForm/AuthForm.types';
import { AccountTypes } from 'constants/app';
import { AuthSchool } from './AuthSchool';
import { AuthParent } from './AuthParent';
import { AuthTransporter } from './AuthTransporter';

type Props = {
    title: string;
    message: string;
    isSignUp: boolean;
    messageButtonText: string;
    accountType: AccountTypes;
    navigate: () => void;
    state: AuthState;
    handleOnChange: HandleStateChange<AuthState>;
};

const AuthFormContainer: React.FC<Props> = props => {
    const signupForm = () => (
        <>
            {props.accountType === AccountTypes.SCHOOL && (
                <AuthSchool state={props.state} handleOnChange={props.handleOnChange} />
            )}
            {props.accountType === AccountTypes.PARENT && (
                <AuthParent state={props.state} handleOnChange={props.handleOnChange} />
            )}
            {props.accountType === AccountTypes.TRANSPORTER && (
                <AuthTransporter
                    state={props.state}
                    handleOnChange={props.handleOnChange}
                />
            )}
        </>
    );
    return (
        <>
            <View style={AuthFormStyles.container}>
                <View style={AuthFormStyles.imageView}>
                    <Image source={Images.logo} style={AuthFormStyles.image} />
                </View>
                <View style={AuthFormStyles.heading}>
                    <RegularText size="huge" style={AuthFormStyles.title}>
                        {props.title}
                    </RegularText>
                    <RegularText style={AuthFormStyles.subText}>
                        with your social network
                    </RegularText>
                </View>
                <View style={AuthFormStyles.socialButtons}>
                    <Button title="Google" style={socialButtons} onPress={() => null} />
                    <Button title="Facebook" style={socialButtons} onPress={() => null} />
                </View>
                <View style={AuthFormStyles.orText}>
                    <RegularText>OR</RegularText>
                </View>
                <View style={AuthFormStyles.form}>
                    <RegularInput
                        style={AuthFormStyles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={val => props.handleOnChange(val, 'email')}
                        value={props.state.email}
                        validators={['basic', 'email']}
                    />
                    <RegularInput
                        style={AuthFormStyles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={val => props.handleOnChange(val, 'password')}
                        value={props.state.password}
                        //TODO: Use password validator
                        validators={['basic']}
                    />
                    {props.isSignUp && signupForm()}
                    <View style={AuthFormStyles.submitButton}>
                        <Button
                            title={props.title}
                            onPress={() => null}
                            style={submitButton}
                            size="large"
                        />
                        <View style={AuthFormStyles.messageView}>
                            <RegularText>{props.message}</RegularText>
                            <Button
                                style={messageButton}
                                title={props.messageButtonText}
                                onPress={props.navigate}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
};

export { AuthFormContainer };
