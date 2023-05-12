import authSlice from "./slices/auth-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});

export default store;