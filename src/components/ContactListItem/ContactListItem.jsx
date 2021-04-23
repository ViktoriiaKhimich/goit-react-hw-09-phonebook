import React from 'react';
import PropTypes from 'prop-types'

import styles from './ContactListItem.module.css'

const ContactListItem = ({name, number, onClick}) => {
    return (  
        <li className={styles.contactListItem}>
            <p>{name}: {number}</p>
            <button className={styles.btn}type="button" onClick={onClick}>Delete</button>
        </li>
    );
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}
 
export default ContactListItem;