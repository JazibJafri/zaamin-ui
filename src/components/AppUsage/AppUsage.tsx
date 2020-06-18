import React from 'react';
import { View, Image } from 'react-native';
import { Images } from 'images';
import { Button } from 'components/Button';
import { AppUsageStyles, buttons } from './AppUsage.styles';

const AppUsage: React.FC<WithStackNavigation<'AppUsage'>> = ({ navigation }) => {
    const icon = {
        name: 'keyboard-arrow-right',
        size: 25,
        style: AppUsageStyles.icon,
    };
    return (
        <View style={AppUsageStyles.container}>
            <View style={AppUsageStyles.imageView}>
                <Image source={Images.logo} style={AppUsageStyles.image} />
            </View>
            <View style={AppUsageStyles.buttonView}>
                <Button
                    title="School"
                    onPress={() => navigation.navigate('Greeting')}
                    style={buttons}
                    size="large"
                    icon={icon}
                />
                <Button
                    title="Picnic"
                    onPress={() => navigation.navigate('Login')}
                    style={buttons}
                    size="large"
                    icon={icon}
                />
            </View>
        </View>
    );
};

export { AppUsage };
