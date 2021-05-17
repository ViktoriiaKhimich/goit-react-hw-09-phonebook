import { createAction } from '@reduxjs/toolkit';

export const loginRequest = createAction('auth/loginRequest');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginError = createAction('auth/loginError')

export const logoutRequest = createAction('auth/logoutRequest');
export const logoutSuccess = createAction('auth/logoutSuccess');
export const logoutError = createAction('auth/logoutError');

export const registerRequest = createAction('auth/registerRequest');
export const registerSuccess = createAction('auth/registerSuccess');
export const registerError = createAction('auth/registerError');

export const currentUserRequest = createAction('auth/currentUserRequest');
export const currentUserSuccess = createAction('auth/currentUserSuccess');
export const currentUserError = createAction('auth/currentUserError')

export default {
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    registerRequest,
    registerSuccess,
    registerError,
    currentUserRequest,
    currentUserSuccess,
    currentUserError,
}
