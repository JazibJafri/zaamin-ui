import React from 'react';
import { View, Image } from 'react-native';
import { Images } from 'images';
import { Button } from 'components/Button';
import { AppUsageStyles, buttons } from './AppUsage.styles';

const AppUsage = () => {
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
                    onPress={() => null}
                    style={buttons}
                    size="large"
                    icon={icon}
                />
                <Button
                    title="Picnic"
                    onPress={() => null}
                    style={buttons}
                    size="large"
                    icon={icon}
                />
            </View>
        </View>
    );
};

export { AppUsage };
