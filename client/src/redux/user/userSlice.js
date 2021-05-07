import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser, auth } from './userAPI';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: '',
  },
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.status = 'loading';
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.register = payload;
      state.status = 'success';
    },
    [loginUser.pending]: (state) => {
      state.status = 'loading';
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.loginSuccess = payload;
    },
    [logoutUser.pending]: (state) => {
      state.status = 'loading';
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.userData = null;
      state.loginSuccess = null;
    },
    [auth.pending]: (state) => {
      state.status = 'loading';
    },
    [auth.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.userData = payload;
    },
  },
});

export const selectUser = (state) => state.user.useData;
export default userSlice.reducer;
