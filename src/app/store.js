import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import scoreReducer from '../features/score/scoreSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    scores:scoreReducer
  },
});
