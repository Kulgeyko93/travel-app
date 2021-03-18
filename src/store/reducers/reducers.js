import { createReducer } from '@reduxjs/toolkit';
import { setLang, setCountry, setIndexSlideCountry } from '../actions/actions';

const initialState = {
  lang: 'en',
  country: 'brazil',
  indexCountry: 0,
  isMain: false,
};

const reducers = createReducer(initialState, {
  [setLang]: (state, action) => {
    state.lang = action.payload;
  },
  [setCountry]: (state, action) => {
    state.country = action.payload;
  },
  [setIndexSlideCountry]: (state, action) => {
    state.indexCountry = action.payload;
  },
});

export default reducers;
