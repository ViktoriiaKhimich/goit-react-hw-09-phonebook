import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './NavbarNavItem.module.css'
const NavbarNavItem = ({ to, children }) => {
    return (
        <li>
            <NavLink className={styles.pageNavItem} exact to={to}>{children}</NavLink>
        </li>
    );
}

export default NavbarNavItem;