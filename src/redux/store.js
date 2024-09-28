import { configureStore } from "@reduxjs/toolkit";
import cigarettes from "./slices/cigarettesSlice";
import filter from "./slices/filterSlice";
export const store = configureStore({
  reducer: { cigarettes, filter },
});
