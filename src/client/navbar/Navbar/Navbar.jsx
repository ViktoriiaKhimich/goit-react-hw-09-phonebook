import React from 'react';
import { connect } from 'react-redux'
import NavbarAuth from '../NavbarAuth'
import NavbarNav from '../NavbarNav'
import UserMenu from '../UserMenu'
import selectors from '../../authorisation/redux/auth/selectors'

import styles from './Navbar.module.css'

const Navbar = ({ isLogined }) => {
    return (
        <header>
            <nav className={styles.navigation}>
                <NavbarNav />
                {isLogined ? <UserMenu /> : <NavbarAuth />}
            </nav>
        </header>
    );
}

const mapStateToProps = state => ({
    isLogined: selectors.isLogined(state)
})

export default connect(mapStateToProps)(Navbar);