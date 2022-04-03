import { createSlice } from "@reduxjs/toolkit";

export const configOptionsSlice = createSlice({
  name: "chosenConfig",
    initialState: {
        activePage: 0,
        lastPage:6,
        selectedConfig:{
            engine: {},
            paint: {},
            rims: {},
            seatType: {},
            interiorColor: {},
            additionalEquipment:[]
        }
  },
  reducers: {
      nextPage: (state) => {
          if (state.activePage < state.lastPage) {
              state.activePage += 1;   
          }
      },
      previousPage: (state) => {
          if (state.activePage > 0) {
              state.activePage -= 1;   
          }
      },
      setConfig:(state,action) =>{
          if (action.payload.targetKey === 'additionalEquipment') {
              
          }
          else {
              state.selectedConfig[action.payload.targetKey] = action.payload.v;
          }
      }
  }
});

// Action creators are generated for each case reducer function
export const {nextPage,previousPage,setConfig} = configOptionsSlice.actions;

export default configOptionsSlice.reducer;
