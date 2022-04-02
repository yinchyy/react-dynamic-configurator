import { configureStore } from "@reduxjs/toolkit";
import configOptionsReducer from './availableConfigOptions';
export default configureStore({
    reducer: {
        availableConfigOptions: configOptionsReducer
    }
});