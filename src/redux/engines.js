import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "engines",
  initialState: {
    engine: [{
      "model": "b20m23i",
      "fuel": "gasoline",
      "displacement": "1998cm^3",
      "power": "180KW",
      "engine_code":"Turbo"
    },
    {
      "model": "b18m25i",
      "fuel": "diesel",
      "displacement": "1763cm^3",
      "power": "130KW",
      "engine_code":"TDI"
    }]
  },
  reducers: {
    
  }
});

// Action creators are generated for each case reducer function
//export const { } = counterSlice.actions;

export default counterSlice.reducer;
