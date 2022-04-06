import { configureStore } from '@reduxjs/toolkit';
import engineReducer from './availableConfigOptions/engine';
import paintReducer from './availableConfigOptions/paint';
import chosenConfigReducer from './chosenConfig';

export default configureStore({
  reducer: {
    engine: engineReducer,
    paint: paintReducer,
    chosenConfig: chosenConfigReducer,
  },
});
