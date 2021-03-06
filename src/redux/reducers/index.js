import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import ticketCreatorReducer from '../ticketCreatorReducer';
import tripsReducer from '../tripReducer';
import userReducer from '../authReducer';
import ticketsReducer from '../ticketsReducer';
import usersCountReducer from '../usersCountReducer';

const rootReducer = combineReducers({
  ticketCreator: ticketCreatorReducer,
  user: userReducer,
  tickets: ticketsReducer,
  trips: tripsReducer,
  usersCount: usersCountReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
