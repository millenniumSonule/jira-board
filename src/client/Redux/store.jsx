import { configureStore } from "@reduxjs/toolkit";
import apiCallDummyReducer from "../Redux/apiCallDummy";

const store = configureStore({
    reducer: {
        getDummyResponse:apiCallDummyReducer,
    }
});

export default store;
