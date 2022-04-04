import { createSlice } from '@reduxjs/toolkit';

export const configOptionsSlice = createSlice({
  name: 'seatType',
  initialState: {
    headers: ['Option', 'Material', 'Heated', 'Ventilated', 'Regulation planes', 'Price'],
    seatType: [{
      name: 'standard',
      material: 'textile',
      isHeated: false,
      isVentilated: false,
      regulationWays: 3,
      price: 900,
    },
    {
      name: 'comfort',
      material: 'polyester',
      isHeated: true,
      isVentilated: false,
      regulationWays: 5,
      price: 2400,
    },
    {
      name: 'premium',
      material: 'leather',
      isHeated: true,
      isVentilated: true,
      regulationWays: 8,
      price: 5200,
    },
    {
      name: 'sport',
      material: 'alcantara',
      isHeated: true,
      isVentilated: true,
      regulationWays: 12,
      price: 6700,
    }],
  },
  reducers: {

  },
});

// Action creators are generated for each case reducer function
// export const { } = counterSlice.actions;

export default configOptionsSlice.reducer;
