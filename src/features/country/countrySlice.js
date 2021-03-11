import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import { statuses } from '../constants';

const initialState = {
  status: statuses.IDLE,
  data: null,
  error: null,
};

export const fetchCountry = createAsyncThunk('country/fetchCountry', async (countryId) => {
  const response = await api.get(`/countries/${countryId}`);
  return response.data;
});

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCountry.pending]: (state) => {
      state.status = statuses.LOADING;
    },
    [fetchCountry.fulfilled]: (state, action) => {
      state.status = statuses.SUCCEEDED;
      state.data = action.payload;
    },
    [fetchCountry.rejected]: (state, action) => {
      state.status = statuses.FAILED;
      state.error = action.error;
    },
  },
});

export function selectCountryStatus(state) {
  return state.country.status;
}

export function selectCountryError(state) {
  return state.country.error;
}

export function selectCountryData(state) {
  return state.country.data;
}

export default countrySlice.reducer;
