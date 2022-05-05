import { createSlice } from '@reduxjs/toolkit';

export const configOptionsSlice = createSlice({
  name: 'engine',
  initialState: {
    headers: ['Model', 'Fuel type', 'Displacement', 'Power', 'Engine code', 'Price'],
    engine: [{
      id: 0,
      model: 'b20m23i',
      fuel: 'gasoline',
      displacement: '1998cm',
      power: '180KW',
      engine_code: 'Turbo',
      price: 5200,
    },
    {
      id: 1,
      model: 'b18m25i',
      fuel: 'diesel',
      displacement: '1763cm',
      power: '130KW',
      engine_code: 'TDI',
      price: 6100,
    }],
  },
  reducers: {

  },
});

// Action creators are generated for each case reducer function
// export const { } = counterSlice.actions;

export default configOptionsSlice.reducer;
