import { configureStore } from "@reduxjs/toolkit";
import cigarettes from "./slices/cigarettesSlice";
import filter from "./slices/filterSlice";
import paginationSlice from "./slices/paginationSlice";
export const store = configureStore({
  reducer: { cigarettes, filter, paginationSlice },
});
