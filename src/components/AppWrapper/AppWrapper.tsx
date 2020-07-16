import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Loader } from 'components/Loader';
import { Message } from 'components/Message';
import { RootStackNavigator } from 'navigators/Stacks/RootStack';

const AppWrapper: React.FC = () => {
    const asyncTasks = useSelector(
        (state: RootState) => state.applicationReducer.asyncTasks,
    );
    const showErrorMessage = useSelector(
        (state: RootState) => state.applicationReducer.error.show,
    );
    return (
        <>
            <NavigationContainer>
                <RootStackNavigator />
            </NavigationContainer>
            {asyncTasks.length > 0 && <Loader />}
            {showErrorMessage && <Message />}
        </>
    );
};

export { AppWrapper };
