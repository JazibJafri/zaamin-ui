import React from 'react';
import { View, Image } from 'react-native';
import { GreetingStyles, leftButton, rightButton, middleButton } from './Greeting.styles';
import { Button } from 'components/Button';
import { Images } from 'images';
import { RegularText } from 'components/RegularText';

const { container, imgView, image, titleView, signupText, buttonsView } = GreetingStyles;

const Greeting: React.FC<WithStackNavigation<'Greeting'>> = ({ navigation }) => {
    return (
        <View style={container}>
            <View style={imgView}>
                <Image source={Images.logo} style={image} />
            </View>
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
                    onPress={() => navigation.navigate('Login')}
                />
                <Button
                    style={middleButton}
                    title="Transporter"
                    onPress={() => navigation.navigate('Login')}
                />
                <Button
                    style={rightButton}
                    title="School"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    );
};

export { Greeting };
