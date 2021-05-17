import axios from 'axios';
import { loginRequest, loginSuccess, loginError, registerRequest, registerSuccess, registerError, logoutRequest, logoutSuccess, logoutError, currentUserRequest, currentUserSuccess, currentUserError } from './actions'

// const token = localStorage.getItem("token")
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

// const instance = axios.create({
//     baseURL: "https://connections-api.herokuapp.com",
// headers: {
//     Authorization: `Bearer ${token}`
// }
// })

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}

const login = userInfo => async dispatch => {
    dispatch(loginRequest())
    try {
        const { data } = await axios.post('/users/login', userInfo)
        token.set(data.token)
        dispatch(loginSuccess(data))
        // dispatch(loginSuccess(data))
    }
    catch (error) {
        dispatch(loginError(error.message))
    }
}

const register = userInfo => async dispatch => {
    dispatch(registerRequest())
    try {
        const { data } = await axios.post('/users/signup', userInfo);
        token.set(data.token)
        dispatch(registerSuccess(data))
    }
    catch (error) {
        dispatch(registerError(error.message))
    }
}

const logout = () => async dispatch => {
    dispatch(logoutRequest())
    try {
        await axios.post('/users/logout');
        // token.unset()
        dispatch(logoutSuccess())
    }
    catch (error) {
        dispatch(logoutError(error.message))
    }
}

const getCurrentUser = () => async (dispatch, getState) => {
    const {
        authorization: { token: persistedToken },
    } = getState();

    if (!persistedToken) {
        return;
    }

    token.set(persistedToken);

    dispatch(currentUserRequest())
    try {
        const { data } = await axios.get('/users/current')
        dispatch(currentUserSuccess(data))
    }
    catch (error) {
        dispatch(currentUserError(error.message))
    }
}

export default {
    login,
    register,
    logout,
    getCurrentUser,
}