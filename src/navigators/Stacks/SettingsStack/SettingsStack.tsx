import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Settings } from 'screens/Settings';
import { Header } from 'components/Header';

const SettingsStack = createStackNavigator();

type Props = WithDrawerNavigation;

const SettingsStackNavigator: React.FC<Props> = ({ navigation }) => {
    return (
        <SettingsStack.Navigator
            initialRouteName="StackNavigator"
            screenOptions={{
                header: () => {
                    return <Header openDrawer={navigation.openDrawer}>Settings</Header>;
                },
            }}
        >
            <SettingsStack.Screen name="StackNavigator" component={Settings} />
        </SettingsStack.Navigator>
    );
};

export { SettingsStackNavigator };
