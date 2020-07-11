import React from 'react';
import { View, Image } from 'react-native';
import { Images } from 'images';
import { Button } from 'components/Button';
import { AppUsageStyles, buttons } from './AppUsage.styles';
import { AppUsageOptions } from 'constants/app';

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
                    title={AppUsageOptions.SCHOOL}
                    onPress={() => navigation.push('AccountType')}
                    style={buttons}
                    size="large"
                    icon={icon}
                />
                <Button
                    title={AppUsageOptions.PICNIC}
                    onPress={() =>
                        navigation.push('SignUpForm', {
                            appUsage: AppUsageOptions.PICNIC,
                        })
                    }
                    style={buttons}
                    size="large"
                    icon={icon}
                />
            </View>
        </View>
    );
};

export { AppUsage };
