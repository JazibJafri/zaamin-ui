import { persistStore, persistReducer } from 'redux-persist';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';

import { rootReducer } from './root-reducer';
import { REDUCERS } from './constants';

const persistConfig = {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: [REDUCERS.USER_PREFERENCES_REDUCER],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initStore = configureStore({
    reducer: persistedReducer,
    preloadedState: {},
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools: Config.ENV !== 'production',
});

const persistor = persistStore(initStore);

export { initStore, persistor };
