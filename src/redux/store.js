import { configureStore } from '@reduxjs/toolkit';
import engineReducer from './availableConfigOptions/engine';
import chosenConfigReducer from './chosenConfig';

export default configureStore({
  reducer: {
    engine: engineReducer,
    chosenConfig: chosenConfigReducer,
  },
});
