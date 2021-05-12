import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ContactListItem from '../ContactListItem'
import operations from '../../redux/operations'
import { filteredContacts } from '../../redux/selectors'

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

const mapStateToProps = (state) => ({
    contacts: filteredContacts(state)
})

const mapDispatchToPtops = dispatch => ({
    onClick: (id) => dispatch(operations.deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToPtops)(ContactList);