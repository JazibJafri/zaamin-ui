import React from 'react';
import { View } from 'react-native';
import {
    AccountTypeStyles,
    leftButton,
    rightButton,
    middleButton,
} from './AccountType.styles';
import { Button } from 'components/Button';
import { RegularText } from 'components/RegularText';
import { AppUsageOptions, AccountTypes } from 'constants/app';

const { container, titleView, signupText, buttonsView } = AccountTypeStyles;

const AccountType: React.FC<WithStackNavigation<'AccountType'>> = ({ navigation }) => {
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
                    title={AccountTypes.PARENT}
                    onPress={() =>
                        navigation.push('SignUpForm', {
                            appUsage: AppUsageOptions.SCHOOL,
                            accountType: AccountTypes.PARENT,
                        })
                    }
                />
                <Button
                    style={middleButton}
                    title={AccountTypes.TRANSPORTER}
                    onPress={() =>
                        navigation.push('SignUpForm', {
                            appUsage: AppUsageOptions.SCHOOL,
                            accountType: AccountTypes.TRANSPORTER,
                        })
                    }
                />
                <Button
                    style={rightButton}
                    title={AccountTypes.SCHOOL}
                    onPress={() =>
                        navigation.push('SignUpForm', {
                            appUsage: AppUsageOptions.SCHOOL,
                            accountType: AccountTypes.SCHOOL,
                        })
                    }
                />
            </View>
        </View>
    );
};

export { AccountType };
