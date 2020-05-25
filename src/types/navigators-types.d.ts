import { NavigationDrawerProp } from 'react-navigation-drawer';

declare global {
    interface WithDrawerNavigation {
        navigation: NavigationDrawerProp;
    }
}
