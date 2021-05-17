import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit'
import actions from './actions';

const contacts = createReducer([], {
    [actions.fetchContactsSuccess]: (_, { payload }) => payload,
    [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
    [actions.deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
})

const loading = createReducer(false, {
    [actions.fetchContactsRequest]: () => true,
    [actions.fetchContactsSuccess]: () => false,
    [actions.fetchContactsError]: () => false,
    [actions.addContactRequest]: () => true,
    [actions.addContactSuccess]: () => false,
    [actions.addContactError]: () => false,
    [actions.deleteContactRequest]: () => true,
    [actions.deleteContactSuccess]: () => false,
    [actions.deleteContactError]: () => false,
})

const filter = createReducer('', {
    [actions.filterContacts]: (_, { payload }) => payload,
})

export default combineReducers({
    contacts,
    filter,
    loading,
})