import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PrivateRoute from './client/authorisation/components/PrivateRoute'
import PublicRoute from './client/authorisation/components/PublicRoute'
import operations from './client/authorisation/redux/auth/operations'

import Navbar from './client/navbar/Navbar'
// import PhoneBookPage from './client/contacts/pages/PhonebookPage'
// import LoginPage from './client/authorisation/pages/LoginPage'
// import RegistrationPage from './client/authorisation/pages/RegistrationPage'


const PhoneBookPage = lazy(() => import('./client/contacts/pages/PhonebookPage'))
const LoginPage = lazy(() => import('./client/authorisation/pages/LoginPage'))
const RegistrationPage = lazy(() => import('./client/authorisation/pages/RegistrationPage'))

class App extends Component {

    componentDidMount() {
        console.log(this.props);
        this.props.getCurrentUser()
    }

    render() {
        return (<>
            <Navbar />
            <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                    {/* <Route path='/' exact component={HomePage} /> */}
                    <PrivateRoute path='/contacts' exact component={PhoneBookPage} />
                    <PublicRoute path='/login' exact restricted component={LoginPage} />
                    <PublicRoute path='/register' exact restricted component={RegistrationPage} />
                </Switch>
            </Suspense>
        </>
        );
    }

}

const mapDispatchToProps = {
    getCurrentUser: operations.getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App);