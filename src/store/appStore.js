import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducers from './reducers/reducers';
// import rootReducer from './reducers';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const appStore = configureStore({
  reducer: {
    main: reducers,
  },
  middleware,
  devTools: true,
});

export default appStore;
