import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';
import axios from 'axios';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const res = await axios.post('/api/login', credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err.response.data });
  }
};
