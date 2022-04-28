import { createSlice, configureStore } from '@reduxjs/toolkit';
import engineReducer from '../redux/availableConfigOptions/engine';
import paintReducer from '../redux/availableConfigOptions/paint';
import rimsReducer from '../redux/availableConfigOptions/rims';
import seatTypeReducer from '../redux/availableConfigOptions/seatType';
import interiorColorReducer from '../redux/availableConfigOptions/interiorColor';
import additionalEquipmentReducer from '../redux/availableConfigOptions/additionalEquipment';

const config = createSlice({
  name: 'chosenConfig',
  initialState: {
    activePage: 0,
    lastPage: 7,
    engineID: 0,
    paintID: 0,
    rimsID: 0,
    rimsColorID: 0,
    seatTypeID: 0,
    interiorColorID: 0,
    additionalEquipmentIDs: [],
  },
  reducers: {
    nextPage: (state) => {
      if (state.activePage < state.lastPage) {
        return {
          ...state,
          activePage: state.activePage + 1,
        };
      }
      return {
        ...state,
      };
    },
    previousPage: (state) => {
      if (state.activePage > 0) {
        return {
          ...state,
          activePage: state.activePage - 1,
        };
      }
      return {
        ...state,
      };
    },
    returnToFirstPage: (state) => ({ ...state, activePage: 0 }),
    moveToLastPage: (state) => ({ ...state, activePage: state.lastPage }),
    setEngine: (state, action) => ({ ...state, engineID: action.payload }),
    setPaint: (state, action) => ({ ...state, paintID: action.payload }),
    setRims: (state, action) => ({ ...state, rimsID: action.payload }),
    setRimsColor: (state, action) => ({ ...state, rimsColorID: action.payload }),
    setSeatType: (state, action) => ({ ...state, seatTypeID: action.payload }),
    setInteriorColor: (state, action) => ({ ...state, interiorColorID: action.payload }),
    setAddEq: (state, action) => ({ ...state, additionalEquipmentIDs: action.payload }),
  },
});
const checkboxStates = createSlice({
  name: 'checkboxStates',
  initialState: {
    checkboxStates: [],
  },
  reducers: {
    setCheckboxStates: (state, action) => ({ ...state, checkboxStates: action.payload }),
  },
});

export default configureStore({
  reducer: {
    engine: engineReducer,
    paint: paintReducer,
    rims: rimsReducer,
    seatType: seatTypeReducer,
    interiorColor: interiorColorReducer,
    additionalEquipment: additionalEquipmentReducer,
    chosenConfig: config.reducer,
    checkboxStates: checkboxStates.reducer,
  },
});
export const {
  nextPage,
  previousPage,
  returnToFirstPage,
  moveToLastPage,
  setEngine,
  setPaint,
  setRimsColor,
  setRims,
  setSeatType,
  setInteriorColor,
} = config.actions;

export const { setCheckboxStates } = checkboxStates.actions;
