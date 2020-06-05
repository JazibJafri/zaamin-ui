import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

/* Absolute Imports */
import { ThumbnailDecorated } from 'components/Thumbnail';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tab1" component={ThumbnailDecorated} />
        </Tab.Navigator>
    );
};

export { TabNavigator };
