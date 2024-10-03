import { configureStore } from "@reduxjs/toolkit";
import items from "./slices/itemsSlice";
import filter from "./slices/filterSlice";
import paginationSlice from "./slices/paginationSlice";
export const store = configureStore({
  reducer: { items, filter, paginationSlice },
});
