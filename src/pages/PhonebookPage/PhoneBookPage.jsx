import React, { Component } from 'react'
import ContactForm from '../../components/ContactFrom'
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList'

class PhonebookPage extends Component {

    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm />

                <h2>Contacts</h2>
                <Filter />
                <ContactList />
            </div>
        )
    }
}

export default PhonebookPage;