import axios from 'axios';
import actions from './actions'

const { fetchContactsRequest, fetchContactsSuccess, fetchContactsError, addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError } = actions;

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest())

    axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactsSuccess(data)))
        .catch(error => dispatch(fetchContactsError(error.message)))
}

const addContact = (name, number) => dispatch => {
    const contact = { name, number };

    dispatch(addContactRequest())

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error.message)));
}

const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error.message)))
}


export default { fetchContacts, addContact, deleteContact };