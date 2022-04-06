import { createSlice } from '@reduxjs/toolkit';

export const configOptionsSlice = createSlice({
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
    },
    {
      id: 2,
      size: 18,
      name: 'alloy sport carbon',
      price: 1600,
    }],
  },
  reducers: {

  },
});

// Action creators are generated for each case reducer function
// export const { } = counterSlice.actions;

export default configOptionsSlice.reducer;
