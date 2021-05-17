import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import selectors from '../redux/auth/selectors'
import { connect } from 'react-redux'

const PublicRoute = ({
    component: Component,
    isLogined,
    ...routeProps
}) => (
    <Route
        {...routeProps}
        render={props =>
            isLogined && routeProps.restricted ?
                <Redirect to='/contacts' /> : <Component {...props} />}
    />
);

const mapStateToProps = state => ({
    isLogined: selectors.isLogined(state)
})

export default connect(mapStateToProps)(PublicRoute)