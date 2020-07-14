import React, { useContext, useEffect } from 'react';
import { View, Image, useWindowDimensions, StatusBar } from 'react-native';
import * as Text from 'constants/text';
import { AppContext } from 'contexts/AppContext';
import {
    LoginFormStyles,
    socialButtons,
    messageButton,
    submitButton,
} from './LoginFormContainer.styles';
import { RegularInput } from 'components/RegularInput';
import { Button } from 'components/Button';
import { RegularText } from 'components/RegularText';
import { Images } from 'images';
import { LoginState } from 'screens/LoginForm/LoginForm.types';
import { getScreenHeight } from 'util/helpers';

type Props = {
    navigate: () => void;
    formState: LoginState;
    handleOnChange: HandleStateChange<LoginState>;
    onSubmit: HandleSubmit;
};

const LoginFormContainer: React.FC<Props> = props => {
    const { setIsAppLoaded } = useContext(AppContext);
    useEffect(() => {
        setTimeout(() => {
            setIsAppLoaded(true);
        }, 1000);
    }, []);
    const window = useWindowDimensions();
    const statusBarHeight = StatusBar.currentHeight;
    const screenHeight = getScreenHeight(window, statusBarHeight);
    return (
        <View style={[LoginFormStyles.container, { minHeight: screenHeight }]}>
            <View style={LoginFormStyles.imageView}>
                <Image source={Images.logo} style={LoginFormStyles.image} />
            </View>
            <View style={LoginFormStyles.heading}>
                <RegularText size="huge" style={LoginFormStyles.title}>
                    {Text.LOGIN}
                </RegularText>
                <RegularText style={LoginFormStyles.subText}>
                    with your social network
                </RegularText>
            </View>
            <View style={LoginFormStyles.socialButtons}>
                <Button title="Google" buttonStyle={socialButtons} onPress={() => null} />
                <Button
                    title="Facebook"
                    buttonStyle={socialButtons}
                    onPress={() => null}
                />
            </View>
            <View style={LoginFormStyles.orText}>
                <RegularText>OR</RegularText>
            </View>
            <View style={LoginFormStyles.form}>
                <RegularInput
                    style={LoginFormStyles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={(val, err) => props.handleOnChange(val, 'email', err)}
                    value={props.formState.email}
                    validators={['basic', 'email']}
                />
                <RegularInput
                    style={LoginFormStyles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(val, err) =>
                        props.handleOnChange(val, 'password', err)
                    }
                    value={props.formState.password}
                    validators={['basic', 'password']}
                />
                <View style={LoginFormStyles.submitButton}>
                    <View style={LoginFormStyles.submitButtonView}>
                        <Button
                            title={Text.LOGIN}
                            onPress={props.onSubmit}
                            buttonStyle={submitButton}
                            size="large"
                        />
                    </View>
                    <View style={LoginFormStyles.messageView}>
                        <RegularText>{Text.DONT_HAVE_AN_ACCOUNT}</RegularText>
                        <Button
                            buttonStyle={messageButton}
                            title={Text.SIGNUP}
                            onPress={props.navigate}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export { LoginFormContainer };
