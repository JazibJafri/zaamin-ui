import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Loader } from 'components/Loader';
import { AppContext } from 'contexts/AppContext';
import { Message } from 'components/Message';
import { RootStackNavigator } from 'navigators/Stacks/RootStack';

const AppWrapper: React.FC = () => {
    const { setIsAppLoaded } = useContext(AppContext);
    useEffect(() => {
        setTimeout(() => {
            setIsAppLoaded(true);
        }, 1000);
    }, []);
    const asyncTasks = useSelector(
        (state: RootState) => state.applicationReducer.asyncTasks,
    );
    const showErrorMessage = useSelector(
        (state: RootState) => state.applicationReducer.error.show,
    );
    const isLoggedIn = useSelector((state: RootState) => state.userReducer.isLoggedIn);
    const didJustSignedUp = useSelector(
        (state: RootState) => state.userReducer.didJustSignedUp,
    );
    return (
        <>
            <NavigationContainer>
                <RootStackNavigator
                    isLoggedIn={isLoggedIn}
                    didJustSignedUp={didJustSignedUp}
                />
            </NavigationContainer>
            {asyncTasks.length > 0 && <Loader />}
            {showErrorMessage && <Message />}
        </>
    );
};

export { AppWrapper };
