import { configureStore } from "@reduxjs/toolkit";
import allProductSlice from "./slices/allProductSlice";
import eventsSlice from "./slices/eventsSlice";
export const store = configureStore({
  reducer: {
    events: eventsSlice,
    products: allProductSlice,
  },
});
