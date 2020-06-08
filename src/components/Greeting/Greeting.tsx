import React from 'react';
import { View, Image } from 'react-native';
import { GreetingStyles, leftButton, rightButton, middleButton } from './Greeting.styles';
import { Button } from 'components/Button';
import { Images } from 'images';
import { RegularText } from 'components/RegularText';

const { container, imgView, image, titleView, signupText, buttonsView } = GreetingStyles;

const Greeting: React.FC = () => {
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
                <Button styles={leftButton} title="Parent" onPress={() => null} />
                <Button styles={middleButton} title="Transporter" onPress={() => null} />
                <Button styles={rightButton} title="School" onPress={() => null} />
            </View>
        </View>
    );
};

export { Greeting };
