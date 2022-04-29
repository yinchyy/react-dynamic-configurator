import { configureStore } from '@reduxjs/toolkit';
import engineReducer from '../redux/availableConfigOptions/engine';
import paintReducer from '../redux/availableConfigOptions/paint';
import rimsReducer from '../redux/availableConfigOptions/rims';
import seatTypeReducer from '../redux/availableConfigOptions/seatType';
import interiorColorReducer from '../redux/availableConfigOptions/interiorColor';
import additionalEquipmentReducer from '../redux/availableConfigOptions/additionalEquipment';
import checkboxStatesReducer from '../redux/checkboxStates';
import chosenConfigReducer from '../redux/chosenConfig';

export default configureStore({
  reducer: {
    engine: engineReducer,
    paint: paintReducer,
    rims: rimsReducer,
    seatType: seatTypeReducer,
    interiorColor: interiorColorReducer,
    additionalEquipment: additionalEquipmentReducer,
    chosenConfig: chosenConfigReducer,
    checkboxStates: checkboxStatesReducer,
  },
});
