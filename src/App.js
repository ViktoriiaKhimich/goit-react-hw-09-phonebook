import React, {Component} from 'react';
import {v4} from 'uuid'

import styles from './App.module.css'

import ContactForm from './components/ContactFrom';
import Filter from './components/Filter';
import ContactList from './components/ContactList'

class App extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: "",
        errorMessage: ""
    }

    addContact = ({name, number}) => {
        
        this.setState(({contacts}) => {
            const contact = contacts.find(contact => contact.name === name || contact.number === number)
    
            if(!contact){
                const newList = [...contacts];
          
                const newContact = {
                    id: v4(),
                    name, 
                    number
                }
                newList.push(newContact)
                return {
                    contacts: newList,
                }
            }
            let errorMessage = ""
            if (contact.name === name) {
                errorMessage = `${name} is already in contacts`
            }

            return {
                errorMessage
            }
        })
    }

    handleFilter = (e) => {
        this.setState({
            filter: e.target.value,
        })
    }

    handleDelete = (idx) => {
        this.setState(({contacts})=>{
            const newContacts = [...contacts];
            newContacts.splice(idx, 1);
            return {
                contacts: newContacts,
            }
        })
    }


    render() {
        const {addContact, handleFilter, handleDelete} = this;
        const {filter, contacts, errorMessage} = this.state;

        const normalizedFilter = filter.toLowerCase();
        const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

        return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={addContact} />
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

            <h2>Contacts</h2>
            <Filter filter={filter} onChange={handleFilter}/>
            <ContactList onClick={handleDelete} contacts={filteredContacts}/>
        </div>
        )
        
    }
}


 
export default App;