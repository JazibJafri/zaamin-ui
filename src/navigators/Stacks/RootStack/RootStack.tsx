import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountType } from 'screens/AccountType';
import { AppUsage } from 'screens/AppUsage';
import { SignUpForm } from 'screens/SignUpForm';
import { LoginForm } from 'screens/LoginForm';
import { Header } from 'components/Header';

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
    return (
        <RootStack.Navigator
            initialRouteName="LoginForm"
            screenOptions={{
                headerStyle: {
                    height: 50,
                },
            }}
        >
            <RootStack.Screen
                name="LoginForm"
                component={LoginForm}
                options={{
                    headerShown: false,
                }}
            />
            <RootStack.Screen
                name="SignUpForm"
                component={SignUpForm}
                options={{
                    headerShown: false,
                }}
            />
            <RootStack.Screen
                name="AppUsage"
                component={AppUsage}
                options={{
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
