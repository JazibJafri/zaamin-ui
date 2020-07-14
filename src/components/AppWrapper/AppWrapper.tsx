import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Loader } from 'components/Loader';
import { RootStackNavigator } from 'navigators/Stacks/RootStack';

const AppWrapper: React.FC = () => {
    const asyncTasks = useSelector(
        (state: RootState) => state.applicationReducer.asyncTasks,
    );
    return (
        <>
            <NavigationContainer>
                <RootStackNavigator />
            </NavigationContainer>
            {asyncTasks.length > 0 && <Loader />}
        </>
    );
};

export { AppWrapper };
