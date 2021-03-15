import { createReducer } from '@reduxjs/toolkit';
import { setLang, setCountry } from '../actions/actions';

const initialState = {
  lang: 'en',
  country: 'brazil',
};

const reducers = createReducer(initialState, {
  [setLang]: (state, action) => {
    state.lang = action.payload;
  },
  [setCountry]: (state, action) => {
    state.country = action.payload;
  },
});

export default reducers;
