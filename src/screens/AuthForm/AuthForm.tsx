import React, { useEffect, useContext } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { RegularInput } from 'components/RegularInput';
import { Images } from 'images';
import {
    AuthFormStyles,
    socialButtons,
    submitButton,
    messageButton,
} from './AuthForm.styles';
import { RegularText } from 'components/RegularText';
import { Button } from 'components/Button';
import { AppContext } from 'contexts/AppContext';

type Props = WithStackNavigation<'AuthForm'>;

const AuthForm: React.FC<Props> = ({ navigation, route }) => {
    const isSignUp = route.params?.isSignUp || false;
    const title = isSignUp ? 'Sign up' : 'Login';
    const message = isSignUp ? 'Already registered?' : `Don't have an account`;
    const messageButtonText = isSignUp ? 'Login' : 'Sign up';

    const navigate = () => {
        const navigateTo = isSignUp ? 'AuthForm' : 'AppUsage';
        const params = { isSignUp: !isSignUp };
        navigation.navigate(navigateTo, params);
    };

    const { setIsAppLoaded } = useContext(AppContext);

    useEffect(() => {
        setTimeout(() => {
            setIsAppLoaded(true);
        }, 8000);
    }, []);

    return (
        <ScrollView>
            <View style={AuthFormStyles.container}>
                <View style={AuthFormStyles.imageView}>
                    <Image source={Images.logo} style={AuthFormStyles.image} />
                </View>
                <View style={AuthFormStyles.heading}>
                    <RegularText size="huge" style={AuthFormStyles.title}>
                        {title}
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
                    />
                    <RegularInput
                        style={AuthFormStyles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    {isSignUp && (
                        <>
                            <RegularInput
                                style={AuthFormStyles.input}
                                placeholder="First Name"
                            />
                            <RegularInput
                                style={AuthFormStyles.input}
                                placeholder="Last Name"
                            />
                            <RegularInput
                                style={AuthFormStyles.input}
                                placeholder="Contact"
                                keyboardType="number-pad"
                            />
                        </>
                    )}
                    <View style={AuthFormStyles.submitButton}>
                        <Button
                            title={title}
                            onPress={() => null}
                            style={submitButton}
                            size="large"
                        />
                        <View style={AuthFormStyles.messageView}>
                            <RegularText>{message}</RegularText>
                            <Button
                                style={messageButton}
                                title={messageButtonText}
                                onPress={navigate}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export { AuthForm };
