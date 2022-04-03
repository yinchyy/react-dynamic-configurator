import { createSlice } from "@reduxjs/toolkit";

export const configOptionsSlice = createSlice({
  name: "availableConfigOptions",
  initialState: {
    engine: [{
      "model": "b20m23i",
      "fuel": "gasoline",
      "displacement": "1998cm^3",
      "power": "180KW",
      "engine_code": "Turbo",
      "price":5200
    },
    {
      "model": "b18m25i",
      "fuel": "diesel",
      "displacement": "1763cm^3",
      "power": "130KW",
      "engine_code": "TDI",
      "price":6100
    }],
    paint: [{
      name: "blue sky",
      colorCode: "#57f7ff",
      price:800
    },
    {
      name: "red roses",
      colorCode: "#ff2e31",
      price:800
    },
    {
      name: "yellow winegard",
      colorCode: "#ffc71d",
      price:850
    },
    {
      name: "black cosmos",
      colorCode: "#141414",
      price:750
    }],
    rims: [{
      size: 16,
      name: "alloy lite",
      price: 800
    },
      {
        size: 17,
        name: "alloy sport",
        price:1100
      },
      {
        size: 18,
        name: "alloy sport carbon",
        price:1600
    }],
    seatType: [{
      name: "standard",
      material: "textile",
      isHeated: false,
      isVentilated: false,
      regulationWays: 3,
      price:900
    },
    {
      name: "comfort",
      material: "polyester",
      isHeated: true,
      isVentilated: false,
      regulationWays: 5,
      price:2400
    },
    {
      name: "premium",
      material: "leather",
      isHeated: true,
      isVentilated: true,
      regulationWays: 8,
      price:5200
    },
    {
      name: "sport",
      material: "alcantara",
      isHeated: true,
      isVentilated: true,
      regulationWays: 12,
      price:6700
    }],
    interiorColor: [{
      name: "violet relax",
      colorCode: "#572eff",
      price:500
    },
    {
      name: "pink happiness",
      colorCode: "#e20ef5",
      price:600
    },
    {
      name: "yellow winegard",
      colorCode: "#ffc71d",
      price:650
    },
    {
      name: "green garden",
      colorCode: "#12ff8a",
      price:660
    }],
    additionalEquipment: [{
      name: "dynamic LED lights",
      price:2320
    },
    {
      name: "premium soundsystem",
      price:2198
    },
    {
      name: "sport suspension",
      price:5350
    }]
  },
  reducers: {
    
  }
});

// Action creators are generated for each case reducer function
//export const { } = counterSlice.actions;

export default configOptionsSlice.reducer;
