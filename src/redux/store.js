import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import dataReducer from './redux_method/reducer';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, dataReducer);

export const store = configureStore({
    reducer: {
        items: persistedReducer,
    },
});

export const persistor = persistStore(store);