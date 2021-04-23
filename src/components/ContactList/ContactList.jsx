import React from 'react';
import PropTypes from 'prop-types'
import ContactListItem from '../ContactListItem'

const ContactList = ({contacts, onClick}) => {
    const contactElements = contacts.map(({id, ...props}, idx) => <ContactListItem key={id} {...props} onClick={()=>onClick(idx)} />)
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


 
export default ContactList;