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
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

/* Absolute Import */
import { initStore, persistor } from 'redux-store';
import { RootStackNavigator } from 'navigators/Stacks/RootStack';
import { Greeting } from 'components/Greeting';
import { FontContextProvider } from 'contexts/FontContext';

const App: React.FC = () => (
    <>
        <Provider store={initStore}>
            <PersistGate loading={null} persistor={persistor}>
                <FontContextProvider>
                    <StatusBar barStyle="dark-content" />
                    <Greeting />
                    {/* <NavigationContainer>
                    <RootStackNavigator />
                </NavigationContainer> */}
                </FontContextProvider>
            </PersistGate>
        </Provider>
    </>
);

export default App;
