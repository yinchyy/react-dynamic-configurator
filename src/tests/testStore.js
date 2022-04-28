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

const paints = createSlice({
  name: 'paint',
  initialState: {
    headers: ['Paint color', 'Color code', 'Price'],
    paint: [{
      id: 0,
      name: 'blue sky',
      colorCode: '#57f7ff',
      price: 800,
    },
    {
      id: 1,
      name: 'red roses',
      colorCode: '#ff2e31',
      price: 800,
    }],
  },
}).reducer;

const interiorColors = createSlice({
  name: 'interiorColor',
  initialState: {
    headers: ['Paint color', 'Color code', 'Price'],
    interiorColor: [{
      id: 0,
      name: 'blue sky',
      colorCode: '#57f7ff',
      price: 800,
    },
    {
      id: 1,
      name: 'red roses',
      colorCode: '#ff2e31',
      price: 800,
    }],
  },
}).reducer;

const seats = createSlice({
  name: 'seatType',
  initialState: {
    headers: ['Option', 'Material', 'Heated', 'Ventilated', 'Regulation planes', 'Price'],
    seatType: [{
      id: 0,
      name: 'standard',
      material: 'textile',
      isHeated: false,
      isVentilated: false,
      regulationWays: 3,
      price: 900,
    },
    {
      id: 1,
      name: 'comfort',
      material: 'polyester',
      isHeated: true,
      isVentilated: false,
      regulationWays: 5,
      price: 2400,
    }],
  },
}).reducer;

const rimsReducer = createSlice({
  name: 'rims',
  initialState: {
    headers: ['Size', 'Name', 'Price'],
    rims: [{
      id: 0,
      size: 16,
      name: 'alloy lite',
      price: 800,
    },
    {
      id: 1,
      size: 17,
      name: 'alloy sport',
      price: 1100,
    }],
  },
}).reducer;

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
    returnToFirstPage: (state) => ({ ...state, activePage: 0 }),
    moveToLastPage: (state) => ({ ...state, activePage: state.lastPage }),
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
    engine: engines,
    paint: paints,
    seatType: seats,
    interiorColor: interiorColors,
    rims: rimsReducer,
    chosenConfig: config.reducer,
    additionalEquipment: paints,
    checkboxStates: checkboxStates.reducer,
  },
});
export const {
  setEngine,
  nextPage,
  previousPage,
  returnToFirstPage,
  moveToLastPage,
  setAddEq,
} = config.actions;

export const { setCheckboxStates } = checkboxStates.actions;
