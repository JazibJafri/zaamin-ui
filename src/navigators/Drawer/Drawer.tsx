import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Main } from 'components/Main';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Main} />
    </Drawer.Navigator>
);

export { DrawerNavigator };
