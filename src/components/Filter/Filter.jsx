import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import actions from '../../redux/actions'

import styles from './Filter.module.css'

const Filter = ({ filter, onChange }) => {

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

const mapStateToProps = state => ({
    filter: state.phonebook.filter,
})

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(actions.filterContacts(e.target.value))
})

Filter.defaultProps = {
    filter: '',
    onChange: () => { }
}

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);