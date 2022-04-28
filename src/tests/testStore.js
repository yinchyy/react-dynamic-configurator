import { createSlice, configureStore } from '@reduxjs/toolkit';

const engines = createSlice({
  name: 'engine',
  initialState: {
    headers: ['Model', 'Fuel type', 'Displacement', 'Power', 'Engine code', 'Price'],
    engine: [{
      id: 0,
      model: 'b20m23i',
      fuel: 'gasoline',
      displacement: '1998cm^3',
      power: '180KW',
      engine_code: 'Turbo',
      price: 5200,
    },
    {
      id: 1,
      model: 'b18m25i',
      fuel: 'diesel',
      displacement: '1763cm^3',
      power: '130KW',
      engine_code: 'TDI',
      price: 6100,
    }],
  },
  reducers: {
  },
}).reducer;
const config = createSlice({
  name: 'chosenConfig',
  initialState: {
    engineID: 0,
    activePage: 0,
    lastPage: 7,
  },
  reducers: {
    setEngine: (state, action) => ({ ...state, engineID: action.payload }),
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
  },
});

export default configureStore({
  reducer: {
    engine: engines,
    chosenConfig: config.reducer,
  },
});
export const { setEngine } = config.actions;
