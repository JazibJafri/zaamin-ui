import React, { useEffect } from 'react';
import { connect } from 'react-redux';

/* Absolute Imports */
import { TabNavigator } from 'navigators/Tab';
import { Header } from 'components/Header';
import { DEFAULT_LANGUAGE } from 'util/constants';

interface OwnProps extends WithDrawerNavigation {
    userPreferencesReducer: UserPreferences;
}

const MainComponent = ({ navigation, userPreferencesReducer }: OwnProps) => (
    <>
        <Header openDrawer={navigation.openDrawer}>React App</Header>
        <TabNavigator />
    </>
);

const mapStateToProps = (state: RootState) => ({
    userPreferencesReducer: state.userPreferencesReducer,
});
const Main = connect(mapStateToProps)(MainComponent);

export { Main as MainComponent };
