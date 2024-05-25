import { configureStore } from "@reduxjs/toolkit";
import apiCallDummyReducer from "../Redux/apiCallDummy";

const store = configureStore({
    reducer: {
        apiCallDummy: apiCallDummyReducer
    }
});

export default store;
