import { createSlice } from '@reduxjs/toolkit';

export const configOptionsSlice = createSlice({
  name: 'additionalEquipment',
  initialState: {
    headers: ['Name', 'Price'],
    additionalEquipment: [{
      name: 'dynamic LED lights',
      price: 2320,
    },
    {
      name: 'premium soundsystem',
      price: 2198,
    },
    {
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
