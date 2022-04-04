import { createSlice } from '@reduxjs/toolkit';

export const configOptionsSlice = createSlice({
  name: 'paint',
  initialState: {
    headers: ['Paint color', 'Color code', 'Price'],
    paint: [{
      name: 'blue sky',
      colorCode: '#57f7ff',
      price: 800,
    },
    {
      name: 'red roses',
      colorCode: '#ff2e31',
      price: 800,
    },
    {
      name: 'yellow winegard',
      colorCode: '#ffc71d',
      price: 850,
    },
    {
      name: 'black cosmos',
      colorCode: '#141414',
      price: 750,
    }],
  },
  reducers: {

  },
});

// Action creators are generated for each case reducer function
// export const { } = counterSlice.actions;

export default configOptionsSlice.reducer;
