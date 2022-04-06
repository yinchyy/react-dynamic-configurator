import { createSlice } from '@reduxjs/toolkit';

export const configOptionsSlice = createSlice({
  name: 'additionalEquipment',
  initialState: {
    headers: ['Name', 'Price'],
    additionalEquipment: [{
      id: 0,
      name: 'dynamic LED lights',
      price: 2320,
    },
    {
      id: 1,
      name: 'premium soundsystem',
      price: 2198,
    },
    {
      id: 2,
      name: 'sport suspension',
      price: 5350,
    }],
  },
  reducers: {

  },
});

// Action creators are generated for each case reducer function
// export const { } = counterSlice.actions;

export default configOptionsSlice.reducer;
