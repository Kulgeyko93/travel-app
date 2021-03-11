import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import { statuses } from '../constants';

const initialState = {
  status: statuses.IDLE,
  data: null,
  error: null,
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await api.get('/countries');
  return response.data;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCountries.pending]: (state) => {
      state.status = statuses.LOADING;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.status = statuses.SUCCEEDED;
      state.data = action.payload;
    },
    [fetchCountries.rejected]: (state, action) => {
      state.status = statuses.FAILED;
      state.error = action.error;
    },
  },
});

export function selectCountriesStatus(state) {
  return state.countries.status;
}

export function selectCountriesError(state) {
  return state.countries.error;
}

export function selectCountriesData(state) {
  return state.countries.data;
}

export default countriesSlice.reducer;
