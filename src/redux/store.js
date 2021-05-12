import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';

import logger from 'redux-logger'
import reducer from './reducer'

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}), logger];

const store = configureStore({
    reducer: {
        phonebook: reducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});



export default store;