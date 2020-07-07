import { persistStore, persistReducer } from 'redux-persist';
import { useDispatch } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';

import { rootReducer, reducers } from './root-reducer';

const persistConfig = {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: [reducers.userReducer],
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

export type AppDispatch = typeof initStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
