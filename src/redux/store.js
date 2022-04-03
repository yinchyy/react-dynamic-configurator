import { configureStore } from "@reduxjs/toolkit";
import configOptionsReducer from './availableConfigOptions';
import chosenConfigReducer from "./chosenConfig";
export default configureStore({
    reducer: {
        availableConfigOptions: configOptionsReducer,
        chosenConfig: chosenConfigReducer
    }
});