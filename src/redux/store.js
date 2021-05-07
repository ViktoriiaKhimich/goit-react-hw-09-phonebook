import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'
import reducer from './reducer'

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter']
}

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}), logger];

const store = configureStore({
    reducer: {
        phonebook: persistReducer(contactsPersistConfig, reducer)
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store)

export default { store, persistor };