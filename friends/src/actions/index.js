import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (creds) => dispatch => {
    console.log(res.data.payload)
    dispatch({ type: LOGIN_START })
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem(token, res.data.payload)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
        })
        .catch(err => console.log(err))
}

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_START })
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({ FETCH_SUCCESS, payload: res.data.payload })
        })
        .catch(err => console.log(err))
}