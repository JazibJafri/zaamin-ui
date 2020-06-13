import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Greeting } from 'components/Greeting';
import { AppUsage } from 'components/AppUsage';

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
    return (
        <RootStack.Navigator initialRouteName="AppUsage">
            <RootStack.Screen
                name="AppUsage"
                component={AppUsage}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="Greeting"
                component={Greeting}
                options={{
                    headerShown: false,
                }}
            />
        </RootStack.Navigator>
    );
};

export { RootStackNavigator };
