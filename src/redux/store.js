import { configureStore } from '@reduxjs/toolkit';
import engineReducer from './availableConfigOptions/engine';
import paintReducer from './availableConfigOptions/paint';
import rimsReducer from './availableConfigOptions/rims';
import seatTypeReducer from './availableConfigOptions/seatType';
import interiorColorReducer from './availableConfigOptions/interiorColor';
import chosenConfigReducer from './chosenConfig';

export default configureStore({
  reducer: {
    engine: engineReducer,
    paint: paintReducer,
    rims: rimsReducer,
    seatType: seatTypeReducer,
    interiorColor: interiorColorReducer,
    chosenConfig: chosenConfigReducer,
  },
});
