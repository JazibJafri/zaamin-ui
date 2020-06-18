import React from 'react';
import { View, Image } from 'react-native';
import { RegularInput } from 'components/RegularInput';
import { Images } from 'images';
import { LoginStyles, socialButtons, loginButton } from './Login.styles';
import { RegularText } from 'components/RegularText';
import { Button } from 'components/Button';

const Login: React.FC<WithStackNavigation<'Login'>> = () => {
    return (
        <View style={LoginStyles.container}>
            <View style={LoginStyles.imageView}>
                <Image source={Images.logo} style={LoginStyles.image} />
            </View>
            <View style={LoginStyles.heading}>
                <RegularText size="huge" style={LoginStyles.title}>
                    Login
                </RegularText>
                <RegularText style={LoginStyles.subText}>
                    with your social network
                </RegularText>
            </View>
            <View style={LoginStyles.socialButtons}>
                <Button title="Google" style={socialButtons} onPress={() => null} />
                <Button title="Facebook" style={socialButtons} onPress={() => null} />
            </View>
            <View style={LoginStyles.orText}>
                <RegularText>OR</RegularText>
            </View>
            <View style={LoginStyles.form}>
                <RegularInput style={LoginStyles.input} placeholder="Email" />
                <RegularInput
                    style={LoginStyles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <View style={LoginStyles.loginButton}>
                    <Button
                        title="Login"
                        onPress={() => null}
                        style={loginButton}
                        size="large"
                    />
                </View>
            </View>
        </View>
    );
};

export { Login };
