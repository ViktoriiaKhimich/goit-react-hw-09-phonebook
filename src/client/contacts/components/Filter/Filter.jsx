import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { v4 } from 'uuid';
import PropTypes from 'prop-types'
import actions from '../../redux/actions'

import styles from './Filter.module.css'

const Filter = () => {

    const filter = useSelector(({ phonebook }) => phonebook.filter, shallowEqual);
    const dispatch = useDispatch()

    const filterFieldId = v4();

    return (
        <div className={styles.inputField}>
            <label htmlFor={filterFieldId}>Find contacts by name</label>
            <input
                className={styles.input}
                id={filterFieldId}
                type="text"
                value={filter}
                onChange={(e) => dispatch(actions.filterContacts(e.target.value))}
            />
        </div>
    );
}


Filter.defaultProps = {
    filter: '',
    onChange: () => { }
}

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
}

export default Filter;