import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/reducers';
import countryReducer from '../features/country/countrySlice';
import countriesReducer from '../features/countries/countriesSlice';

const appStore = configureStore({
  reducer: {
    main: reducers,
    country: countryReducer,
    countries: countriesReducer,
  },
});

export default appStore;
