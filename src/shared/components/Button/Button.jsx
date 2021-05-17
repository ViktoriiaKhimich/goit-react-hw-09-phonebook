import React from 'react';
import PropTypes from 'prop-types'

import styles from './Button.module.css'

const Button = ({ children }) => {
    return (<button className={styles.btn} type='submit'>{children}</button>);
}

Button.defaultProps = {
    type: 'submit',
    classname: '',
}

Button.propTypes = {
    type: PropTypes.string,
    classname: PropTypes.string,
}

export default Button;