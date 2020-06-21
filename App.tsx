/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// This must be first import
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

/* Absolute Import */
import { initStore, persistor } from 'redux-store';
import { RootStackNavigator } from 'navigators/Stacks/RootStack';
import { FontContextProvider } from 'contexts/FontContext';

const App: React.FC = () => {
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 0);
    }, []);
    return (
        <>
            <Provider store={initStore}>
                <PersistGate loading={null} persistor={persistor}>
                    <FontContextProvider>
                        <StatusBar barStyle="default" />
                        <NavigationContainer>
                            <RootStackNavigator />
                        </NavigationContainer>
                    </FontContextProvider>
                </PersistGate>
            </Provider>
        </>
    );
};
export default App;
