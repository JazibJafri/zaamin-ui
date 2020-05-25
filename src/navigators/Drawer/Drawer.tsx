import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

/* Absolute Imports */
// import { TabNavigator } from 'navigators/Tab';
import { MainComponent } from 'components/MainComponent';

const RootDrawerNavigator = createDrawerNavigator({
    Home: MainComponent,
});

const DrawerNavigator = createAppContainer(RootDrawerNavigator);

export { DrawerNavigator };
