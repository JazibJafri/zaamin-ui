import { persistStore, persistReducer } from 'redux-persist';
import { useDispatch } from 'react-redux';
import { MiddlewareAPI, Middleware } from 'redux';
import { configureStore, getDefaultMiddleware, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import { applicationActions } from 'redux-store/application';
import Config from 'react-native-config';

import { rootReducer, reducers } from './root-reducer';

const persistConfig = {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: [reducers.userReducer],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const asyncTasksMiddleware: Middleware = ({
    dispatch,
}: MiddlewareAPI<AppDispatch>) => next => (action: PayloadAction) => {
    const { type } = action;
    if (type.includes('pending')) {
        dispatch(applicationActions.addAsyncTask({ type: type.replace('/pending', '') }));
    }
    if (type.includes('fulfilled') || type.includes('rejected')) {
        dispatch(
            applicationActions.removeAsyncTask({
                type: type.replace('/fulfilled', '').replace('/rejected', ''),
            }),
        );
    }
    if (type.includes('rejected')) {
        // handle errors but separate middleware
        dispatch(
            applicationActions.toggleErrorMessage({
                show: true,
                title: action.type,
                //@ts-ignore
                content: action.error.message,
            }),
        );
    }
    return next(action);
};

const initStore = configureStore({
    reducer: persistedReducer,
    preloadedState: {},
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }).concat(asyncTasksMiddleware),
    devTools: Config.ENV !== 'production',
});

const persistor = persistStore(initStore);

export { initStore, persistor };

export type AppDispatch = typeof initStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
