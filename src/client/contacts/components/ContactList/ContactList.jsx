import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import PropTypes from 'prop-types'
import ContactListItem from '../ContactListItem'
import operations from '../../redux/operations'
import { filteredContacts } from '../../redux/selectors'

const ContactList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(state => filteredContacts(state), shallowEqual)

    const contactElements = contacts.map(({ id, ...props }) => <ContactListItem key={id} {...props} onClick={() => dispatch(operations.deleteContact(id))} />)
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