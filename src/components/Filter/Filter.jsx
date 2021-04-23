import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types'

import styles from './Filter.module.css'

const Filter = ({filter, onChange}) => {

    const filterFieldId = v4();
    return ( 
        <div className={styles.inputField}>
        <label htmlFor={filterFieldId}>Find contacts by name</label>
            <input 
            className={styles.input}
            id={filterFieldId}
            type="text"
            value={filter}
            onChange={onChange}
            />
        
        </div>
     );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
}

 
export default Filter;