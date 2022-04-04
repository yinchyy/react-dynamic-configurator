import { createSlice } from '@reduxjs/toolkit';

export const configOptionsSlice = createSlice({
  name: 'interiorColor',
  initialState: {
    headers: ['Name', 'Color code', 'Price'],
    interiorColor: [{
      name: 'violet relax',
      colorCode: '#572eff',
      price: 500,
    },
    {
      name: 'pink happiness',
      colorCode: '#e20ef5',
      price: 600,
    },
    {
      name: 'yellow winegard',
      colorCode: '#ffc71d',
      price: 650,
    },
    {
      name: 'green garden',
      colorCode: '#12ff8a',
      price: 660,
    }],
  },
  reducers: {

  },
});

// Action creators are generated for each case reducer function
// export const { } = counterSlice.actions;

export default configOptionsSlice.reducer;
