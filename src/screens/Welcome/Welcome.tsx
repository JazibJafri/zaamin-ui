import React from 'react';
import { View } from 'react-native';
import { WelcomeStyles, leftButton, rightButton, middleButton } from './Welcome.styles';
import { Button } from 'components/Button';
import { RegularText } from 'components/RegularText';

const { container, titleView, signupText, buttonsView } = WelcomeStyles;

const Welcome: React.FC<WithStackNavigation<'Welcome'>> = ({ navigation }) => {
    return (
        <View style={container}>
            <View style={titleView}>
                <RegularText size="huge">Welcome</RegularText>
                <RegularText size="medium" style={signupText}>
                    Select how you want to signup
                </RegularText>
            </View>
            <View style={buttonsView}>
                <Button
                    style={leftButton}
                    title="Parent"
                    onPress={() => navigation.navigate('AuthForm', { isSignUp: true })}
                />
                <Button
                    style={middleButton}
                    title="Transporter"
                    onPress={() => navigation.navigate('AuthForm', { isSignUp: true })}
                />
                <Button
                    style={rightButton}
                    title="School"
                    onPress={() => navigation.navigate('AuthForm', { isSignUp: true })}
                />
            </View>
        </View>
    );
};

export { Welcome };
