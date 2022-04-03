import { createSlice } from "@reduxjs/toolkit";

export const configOptionsSlice = createSlice({
  name: "chosenConfig",
    initialState: {
        activePage: 0,
        lastPage:6,
        selectedConfig:[]
        //{
            //engine: {},
            //paint: {},
            //rims: {},
            //seatType: {},
            //interiorColor: {},
            //additionalEquipment:[]
        //}
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
          const elemIndex = state.selectedConfig.map((e)=>e[0]).indexOf(action.payload[Object.keys(action.payload)[0]]);
          if (elemIndex === -1) {
              state.selectedConfig.push(action.payload);
          }
          else {
              state.selectedConfig[elemIndex] = action.payload;
          }
      }
  }
});

// Action creators are generated for each case reducer function
export const {nextPage,previousPage,setConfig} = configOptionsSlice.actions;

export default configOptionsSlice.reducer;
