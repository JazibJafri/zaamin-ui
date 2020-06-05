import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigator } from 'navigators/Drawers';

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
    return (
        <RootStack.Navigator initialRouteName="DrawerNavigator">
            <RootStack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    );
};

export { RootStackNavigator };
