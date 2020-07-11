import React from 'react';
import { View, Image, useWindowDimensions, StatusBar } from 'react-native';
import { RegularInput } from 'components/RegularInput';
import * as Text from 'constants/text';
import { Images } from 'images';
import {
    SignUpFormStyles,
    socialButtons,
    submitButton,
    messageButton,
} from './SignUpFormContainer.styles';
import { RegularText } from 'components/RegularText';
import { Button } from 'components/Button';
import { SignUpState } from 'screens/SignUpForm/SignUpForm.types';
import { AccountTypes } from 'constants/app';
import { SignUpSchool } from './SignUpSchool';
import { SignUpPerson } from './SignUpPerson';
import { getScreenHeight } from 'util/helpers';

type Props = {
    accountType: AccountTypes;
    navigate: () => void;
    formState: SignUpState;
    handleOnChange: HandleStateChange<SignUpState>;
    onSubmit: HandleSubmit;
};

const SignUpFormContainer: React.FC<Props> = props => {
    const window = useWindowDimensions();
    const statusBarHeight = StatusBar.currentHeight;
    const screenHeight = getScreenHeight(window, statusBarHeight);
    return (
        <View style={[SignUpFormStyles.container, { minHeight: screenHeight }]}>
            <View style={SignUpFormStyles.imageView}>
                <Image source={Images.logo} style={SignUpFormStyles.image} />
            </View>
            <View style={SignUpFormStyles.heading}>
                <RegularText size="huge" style={SignUpFormStyles.title}>
                    {Text.SIGNUP}
                </RegularText>
                <RegularText style={SignUpFormStyles.subText}>
                    with your social network
                </RegularText>
            </View>
            <View style={SignUpFormStyles.socialButtons}>
                <Button title="Google" style={socialButtons} onPress={() => null} />
                <Button title="Facebook" style={socialButtons} onPress={() => null} />
            </View>
            <View style={SignUpFormStyles.orText}>
                <RegularText>OR</RegularText>
            </View>
            <View style={SignUpFormStyles.form}>
                <RegularInput
                    style={SignUpFormStyles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={(val, err) => props.handleOnChange(val, 'email', err)}
                    value={props.formState.email}
                    validators={['basic', 'email']}
                />
                <RegularInput
                    style={SignUpFormStyles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(val, err) =>
                        props.handleOnChange(val, 'password', err)
                    }
                    value={props.formState.password}
                    validators={['basic', 'password']}
                />
                {props.accountType === AccountTypes.SCHOOL ? (
                    <SignUpSchool
                        state={props.formState}
                        handleOnChange={props.handleOnChange}
                    />
                ) : (
                    <SignUpPerson
                        state={props.formState}
                        handleOnChange={props.handleOnChange}
                    />
                )}
                <View style={SignUpFormStyles.submitButton}>
                    <View style={SignUpFormStyles.submitButtonView}>
                        <Button
                            title={Text.SIGNUP}
                            onPress={props.onSubmit}
                            style={submitButton}
                            size="large"
                        />
                    </View>
                    <View style={SignUpFormStyles.messageView}>
                        <RegularText>{Text.ALREADY_REGISTERED}</RegularText>
                        <Button
                            style={messageButton}
                            title={Text.LOGIN}
                            onPress={props.navigate}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export { SignUpFormContainer };
