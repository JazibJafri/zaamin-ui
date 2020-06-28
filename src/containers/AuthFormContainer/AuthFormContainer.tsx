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

type Props = {
    title: string;
    message: string;
    isSignUp: boolean;
    messageButtonText: string;
    navigate: () => void;
    state: AuthState;
    handleOnChange: (p: keyof AuthState, val: string) => void;
};

const AuthFormContainer: React.FC<Props> = props => {
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
                        onChangeText={val => props.handleOnChange('email', val)}
                    />
                    <RegularInput
                        style={AuthFormStyles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={val => props.handleOnChange('password', val)}
                    />
                    {props.isSignUp && (
                        <>
                            <RegularInput
                                style={AuthFormStyles.input}
                                placeholder="First Name"
                                onChangeText={val =>
                                    props.handleOnChange('firstName', val)
                                }
                            />
                            <RegularInput
                                style={AuthFormStyles.input}
                                placeholder="Last Name"
                                onChangeText={val =>
                                    props.handleOnChange('lastName', val)
                                }
                            />
                            <RegularInput
                                style={AuthFormStyles.input}
                                placeholder="Contact"
                                keyboardType="number-pad"
                                onChangeText={val => props.handleOnChange('contact', val)}
                            />
                        </>
                    )}
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