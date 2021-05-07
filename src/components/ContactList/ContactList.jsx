import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ContactListItem from '../ContactListItem'
import actions from '../../redux/actions'

const ContactList = ({ contacts, onClick }) => {
    const contactElements = contacts.map(({ id, ...props }) => <ContactListItem key={id} {...props} onClick={() => onClick(id)} />)
    return (
        <ul>
            {contactElements}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired)
}

const mapStateToProps = (state) => {
    const { filter, contacts } = state.phonebook;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    return {
        contacts: filteredContacts,
    }
}

const mapDispatchToPtops = dispatch => ({
    onClick: (id) => dispatch(actions.deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToPtops)(ContactList);