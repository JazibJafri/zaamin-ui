import React from 'react';
import { View, Text, Image } from 'react-native';
import { GreetingStyles, leftButton, rightButton, middleButton } from './Greeting.styles';
import { Button } from 'components/Button';
import { Images } from 'images';

const Greeting: React.FC = () => {
    return (
        <View style={GreetingStyles.container}>
            <View style={GreetingStyles.imgView}>
                <Image source={Images.logo} style={GreetingStyles.image} />
            </View>
            {/* <View style={GreetingStyles.logoView}>
                <Text style={GreetingStyles.logoText}>Zaamin</Text>
            </View> */}
            <View style={GreetingStyles.titleView}>
                <Text style={GreetingStyles.welcomeText}>Welcome</Text>
                <Text style={GreetingStyles.signupText}>
                    Select how you want to signup
                </Text>
            </View>
            <View style={GreetingStyles.buttonsView}>
                <Button styles={leftButton} title="Parent" onPress={() => null} />
                <Button styles={middleButton} title="Transporter" onPress={() => null} />
                <Button styles={rightButton} title="School" onPress={() => null} />
            </View>
        </View>
    );
};

export { Greeting };
