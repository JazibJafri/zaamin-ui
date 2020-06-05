import React from 'react';

/* Absolute Imports */
import { TabNavigator } from 'navigators/Tabs';
import { Header } from 'components/Header';

type Props = WithDrawerNavigation;

const Main: React.FC<Props> = ({ navigation }) => (
    <>
        <Header openDrawer={navigation.openDrawer}>Zaamin</Header>
        <TabNavigator />
    </>
);

export { Main };
