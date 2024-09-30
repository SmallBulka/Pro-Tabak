import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paginationArray: [0],
  currentPage: 1,
  itemsPerPage: 1,
  itemsWidth: 500,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPaginationArray: (state, action) => {
      state.paginationArray = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
    setItemsWidth: (state, action) => {
      state.itemsWidth = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPaginationArray,
  setCurrentPage,
  setItemsPerPage,
  setItemsWidth,
} = filterSlice.actions;

export default filterSlice.reducer;
