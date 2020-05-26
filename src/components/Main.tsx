import React, { useEffect } from 'react';
import { connect } from 'react-redux';

/* Absolute Imports */
import { TabNavigator } from 'navigators/Tab';
import { Header } from 'components/Header';
import { DEFAULT_LANGUAGE } from 'util/constants';

interface OwnProps {
    userPreferencesReducer: UserPreferences;
}

type Props = OwnProps & WithDrawerNavigation;

const Main = ({ navigation }: Props) => (
    <>
        <Header openDrawer={navigation.openDrawer}>React App</Header>
        <TabNavigator />
    </>
);

const mapStateToProps = (state: RootState) => ({
    userPreferencesReducer: state.userPreferencesReducer,
});
const MainComponent = connect(mapStateToProps)(Main);

export { MainComponent as Main };
