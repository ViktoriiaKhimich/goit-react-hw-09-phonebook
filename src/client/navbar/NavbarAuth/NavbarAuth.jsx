import React from 'react';
import NavBarAuthItem from '../NavBarAuthItem'
import menuItems from './menu-items'

import styles from './NavbarAuth.module.css'

const NavbarAuth = () => {
    const navAuthElements = menuItems.map(path => {
        return <NavBarAuthItem key={path.id} to={path.to}>{path.text}</NavBarAuthItem>
    })
    return (<ul className={styles.authNav}>{navAuthElements}</ul>);
}

export default NavbarAuth;