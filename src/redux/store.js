import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./slices/eventsSlice";
import gallerySlice from "./slices/gallerySlice";
export const store = configureStore({
  reducer: {
    events: eventsSlice,
    gallery: gallerySlice,
  },
});
