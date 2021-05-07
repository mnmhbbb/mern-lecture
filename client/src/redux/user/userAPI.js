import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('user/loginUser', async (dataToSubmit) => {
  const request = await axios
    .post('api/users/login', dataToSubmit)
    .then((response) => response.data);
  return request;
});

export const registerUser = createAsyncThunk('user/registerUser', async (dataToSubmit) => {
  const request = await axios
    .post('api/users/register', dataToSubmit)
    .then((response) => response.data);
  return request;
});

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  const request = await axios.get('api/users/logout').then((response) => response.data);
  return request;
});

export const auth = createAsyncThunk('user/auth', async () => {
  const request = await axios.get('api/users/auth').then((response) => response.data);
  return request;
});
