import { createSlice } from '@reduxjs/toolkit';

export const checkboxStatesSlice = createSlice({
  name: 'checkboxStates',
  initialState: {
    checkboxStates: [],
  },
  reducers: {
    setCheckboxStates: (state, action) => ({ ...state, checkboxStates: action.payload }),
  },
});

// Action creators are generated for each case reducer function
export const { setCheckboxStates } = checkboxStatesSlice.actions;

export default checkboxStatesSlice.reducer;
