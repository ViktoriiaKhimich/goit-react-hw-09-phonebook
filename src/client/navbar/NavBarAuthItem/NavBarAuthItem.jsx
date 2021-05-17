import React from 'react';
import { NavLink } from 'react-router-dom'

import styles from './NavBarAuthItem.module.css'


const NavBarAuthItem = ({ to, children }) => {
    return (<li className={styles.authNavItem}>
        <NavLink to={to} exact>{children}</NavLink>
    </li>);
}

export default NavBarAuthItem;