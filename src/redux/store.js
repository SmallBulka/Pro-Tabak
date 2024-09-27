import { configureStore } from "@reduxjs/toolkit";
import cigarettes from "./slices/cigarettes";
export const store = configureStore({
  reducer: { cigarettes },
});
