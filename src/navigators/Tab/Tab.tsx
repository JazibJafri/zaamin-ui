import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

/* Absolute Imports */
import { ThumbnailDecorated } from 'components/Thumbnail';

const RootTabNavigator = createBottomTabNavigator(
    {
        Sample: ThumbnailDecorated,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ /* focused, horizontal, */ tintColor }) => {
                const { routeName } = navigation.state;
                const iconName = routeName === 'Sample' ? 'texture' : 'photo';
                return <MaterialIcons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            style: {},
            activeBackgroundColor: '#ffffff',
            inactiveBackgroundColor: '#cccccc',
            activeTintColor: '#000000',
            inactiveTintColor: '#808080',

            /* indicatorStyle:{
            backgroundColor:'blue'
        }, */
            showLabel: false,
            showIcon: true,
        },
    },
);

const TabNavigator = createAppContainer(RootTabNavigator);

export { TabNavigator };
