import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Switch } from 'react-router-dom'
import PrivateRoute from './client/authorisation/components/PrivateRoute'
import PublicRoute from './client/authorisation/components/PublicRoute'
import operations from './client/authorisation/redux/auth/operations'
import Navbar from './client/navbar/Navbar'

const PhoneBookPage = lazy(() => import('./client/contacts/pages/PhonebookPage'))
const LoginPage = lazy(() => import('./client/authorisation/pages/LoginPage'))
const RegistrationPage = lazy(() => import('./client/authorisation/pages/RegistrationPage'))

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(operations.getCurrentUser())
    }, [])

    return (
        <>
            <Navbar />
            <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                    <PrivateRoute path='/contacts' exact component={PhoneBookPage} />
                    <PublicRoute path='/login' exact restricted component={LoginPage} />
                    <PublicRoute path='/register' exact restricted component={RegistrationPage} />
                </Switch>
            </Suspense>
        </>
    );
}

export default App;