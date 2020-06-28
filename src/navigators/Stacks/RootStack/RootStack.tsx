import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountType } from 'screens/AccountType';
import { AppUsage } from 'screens/AppUsage';
import { AuthForm } from 'screens/AuthForm';
import { Header } from 'components/Header';

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
    return (
        <RootStack.Navigator
            initialRouteName="AuthForm"
            screenOptions={{
                headerStyle: {
                    height: 50,
                },
            }}
        >
            <RootStack.Screen
                name="AuthForm"
                component={AuthForm}
                options={{
                    headerShown: false,
                }}
            />
            <RootStack.Screen
                name="AppUsage"
                component={AppUsage}
                options={{
                    // headerShown: false,
                    headerTitle: () => <Header title="Select Account Type" />,
                }}
            />
            <RootStack.Screen
                name="AccountType"
                component={AccountType}
                options={{
                    headerTitle: () => <Header title="Select Role Type" />,
                }}
            />
        </RootStack.Navigator>
    );
};

export { RootStackNavigator };
