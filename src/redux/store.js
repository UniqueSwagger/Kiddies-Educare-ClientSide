import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./slices/eventsSlice";
export const store = configureStore({
  reducer: {
    events: eventsSlice,
  },
});
