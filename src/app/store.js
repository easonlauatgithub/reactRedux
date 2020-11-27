import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    //we want to have a state.counter section of our Redux state object
    //and that we want the counterReducer function to update the state.counter section 
    //whenever an action is dispatched.
    counter: counterReducer,
  },
});
