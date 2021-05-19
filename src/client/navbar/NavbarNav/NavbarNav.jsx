import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import selectors from '../../authorisation/redux/auth/selectors'
import styles from './NavbarNav.module.css'

const NavbarNav = ({ isLogined }) => {
    return (
        <nav>
            <ul className={styles.pageNav}>
                <NavLink className={styles.pageNavItem} exact to='/'>Home Page</NavLink>
                {isLogined && <NavLink className={styles.pageNavItem} exact to='/contacts'>Contacts</NavLink>}
            </ul>
        </nav>
    );
}

const mapStateToProps = state => ({
    isLogined: selectors.isLogined(state)
})

export default connect(mapStateToProps)(NavbarNav);