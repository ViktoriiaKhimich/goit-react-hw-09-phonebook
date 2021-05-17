import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import logger from 'redux-logger'
import contactsReducer from './client/contacts/redux/reducer'
import authReducer from './client/authorisation/redux/auth/reducer'

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}), logger];

const authPersistConfig = {
    key: 'token',
    storage,
    whitelist: ['token']
}

// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter']
// }

const store = configureStore({
    reducer: {
        phonebook: contactsReducer,
        authorization: persistReducer(authPersistConfig, authReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store)

export default { store, persistor }