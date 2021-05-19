import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import ContactForm from '../../components/ContactFrom'
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList'
import operations from '../../redux/operations'
import { loading } from '../../redux/selectors'

const PhonebookPage = () => {

    const loadingContacts = useSelector(state => loading(state), shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(operations.fetchContacts())
    }, [])


    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter />

            {loadingContacts && <h1>...Loading</h1>}
            <ContactList />
        </div>
    )

}

export default PhonebookPage;