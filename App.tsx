/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

/* Absolute Import */
import { initStore, persistor } from 'redux-store';
import { DrawerNavigator } from 'navigators/Drawer';

const App = () => (
    <>
        <Provider store={initStore}>
            <PersistGate loading={null} persistor={persistor}>
                <StatusBar barStyle="dark-content" />
                <DrawerNavigator />
            </PersistGate>
        </Provider>
    </>
);

export default App;
