import { createSlice } from '@reduxjs/toolkit';

export const configOptionsSlice = createSlice({
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
    },
    {
      id: 2,
      name: 'yellow winegard',
      colorCode: '#ffc71d',
      price: 850,
    },
    {
      id: 3,
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
