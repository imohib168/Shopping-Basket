import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";

import shoppingReducer from './shoppingReducer';
import fetchDataReducer from './fetchDataReducer';
import authReducer from './authReducer';

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authReducer', 'shoppingReducer'],
}

const rootReducer = combineReducers({
    fetchDataReducer: fetchDataReducer,
    shoppingReducer: shoppingReducer,
    authReducer: authReducer,
})

const persistReduced = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistReduced
})

export const persistor = persistStore(store);