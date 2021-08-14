import { configureStore, combineReducers } from '@reduxjs/toolkit';

import userReducer from './reducer';

const rootReducer = combineReducers({
  userReducer
});

const store = configureStore({ reducer: rootReducer });

export default store;