import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import selectors from '../redux/auth/selectors'

const PrivateRoute = ({
    component: Component,
    isLogined,
    ...routeProps
}) => (
    <Route
        {...routeProps}
        render={props =>
            isLogined ? <Component {...props} /> : <Redirect to='/login' />}
    />
)

const mapStateToProps = state => ({
    isLogined: selectors.isLogined(state)
})

export default connect(mapStateToProps)(PrivateRoute)
