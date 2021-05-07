import React from 'react'
import PropTypes from 'prop-types';
import typeOptions from './typeOptions'

import styles from './FormInput.module.css'

const FormInput = ({ classname, ...props }) => {
    return (<>
        <input className={`${styles.searchField} ${classname}`} {...props} />
    </>);
}

FormInput.defaultProps = {
    required: false,
    placeholder: '',
    name: '',
    className: '',
    type: 'text',
    value: '',
    onChange: () => { }
}

FormInput.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.oneOf(typeOptions),
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default FormInput;