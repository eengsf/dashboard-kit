import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counterSlice";

const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
  },
});

export default store;
