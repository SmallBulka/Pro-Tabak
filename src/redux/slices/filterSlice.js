import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  country: "",
  brand: "",
  catalog: "cigarettes",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setCatalog: (state, action) => {
      state.catalog = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchValue, setCountry, setBrand, setCatalog } =
  filterSlice.actions;

export default filterSlice.reducer;
