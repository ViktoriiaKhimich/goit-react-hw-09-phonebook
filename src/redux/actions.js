import { createAction } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const filterContacts = createAction('contacts/add');
const deleteContact = createAction('contacts/delete');
const addContact = createAction('contacts/filter', (name, number) => ({
    payload: {
        id: v4(),
        name,
        number,
    }
}))


export default { addContact, deleteContact, filterContacts };