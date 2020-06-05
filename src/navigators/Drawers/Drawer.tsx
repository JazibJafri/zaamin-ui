import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Main } from 'components/Main';
import { SettingsStackNavigator } from 'navigators/Stacks/SettingsStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Main} />
        <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
    </Drawer.Navigator>
);

export { DrawerNavigator };
