import { createSlice } from '@reduxjs/toolkit';

export const configOptionsSlice = createSlice({
  name: 'interiorColor',
  initialState: {
    headers: ['Name', 'Color code', 'Price'],
    interiorColor: [{
      id: 0,
      name: 'violet relax',
      colorCode: '#572eff',
      price: 500,
    },
    {
      id: 1,
      name: 'pink happiness',
      colorCode: '#e20ef5',
      price: 600,
    },
    {
      id: 2,
      name: 'yellow winegard',
      colorCode: '#ffc71d',
      price: 650,
    },
    {
      id: 3,
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
