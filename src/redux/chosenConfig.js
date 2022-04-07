import { createSlice } from '@reduxjs/toolkit';

export const configOptionsSlice = createSlice({
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
    setEngine: (state, action) => ({ ...state, engineID: action.payload }),
    setPaint: (state, action) => ({ ...state, paintID: action.payload }),
    setRims: (state, action) => ({ ...state, rimsID: action.payload }),
    setRimsColor: (state, action) => ({ ...state, rimsColorID: action.payload }),
    setSeatType: (state, action) => ({ ...state, seatTypeID: action.payload }),
    setInteriorColor: (state, action) => ({ ...state, interiorColorID: action.payload }),
    setAddEq: (state, action) => ({ ...state, additionalEquipmentIDs: action.payload }),
  },
});

// Action creators are generated for each case reducer function
export const {
  nextPage, previousPage, returnToFirstPage, setEngine, setPaint, setRimsColor, setRims,
  setSeatType, setInteriorColor, setAddEq,
} = configOptionsSlice.actions;

export default configOptionsSlice.reducer;
