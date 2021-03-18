import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import { statuses } from '../constants';

const initialState = {
  status: statuses.IDLE,
  data: null,
  error: null,
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await api.get('/user');
  return response.data;
});

export const logout = createAsyncThunk('user/logout', async () => {
  const response = await api.post('/logout', {});
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.status = statuses.LOADING;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = statuses.SUCCEEDED;
      state.data = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = statuses.FAILED;
      state.error = action.error;
    },
    [logout.pending]: (state) => {
      state.status = statuses.LOADING;
    },
    [logout.fulfilled]: (state) => {
      state.data = null;
    },
  },
});

export function selectUserStatus(state) {
  return state.user.status;
}

export function selectUserError(state) {
  return state.user.error;
}

export function selectUserData(state) {
  return state.user.data;
}

export default userSlice.reducer;
