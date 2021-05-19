import React from 'react'
import { connect } from 'react-redux'
import selectors from '../../authorisation/redux/auth/selectors'
import operations from '../../authorisation/redux/auth/operations'
import avatar from './panda.png'

const styles = {
    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    p: {
        marginRight: '20px'
    }
}

const UserMenu = ({ userName, avatar, onLogout }) => {
    return (
        <div style={styles.div}>
            <img src={avatar} alt='avatar' width='35' />
            <p style={styles.p}>Welcome, {userName} </p>
            <button type='button' onClick={onLogout}>Log out</button>
        </div>);
}

const mapStateToProps = state => ({
    userName: selectors.getUserName(state),
    avatar,
})

const mapDispatchToProps = {
    onLogout: operations.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);