import { createSlice } from "@reduxjs/toolkit";
import cigarettesJSON from "../../assets/cigarettes.json";
// export const fetchCigarettes = createAsyncThunk(
//   "users/fetchCigarettesStatus",
//   async (params, thunkAPI) => {
//     const {
//       sortProperty,
//       sortDesc,
//       searchValue,
//       category,
//       itemsPerPage,
//       itemOffset,
//     } = params;
//     const page = itemOffset / itemsPerPage + 1;
//     const delay = (ms) => {
//       return new Promise((resolve) => {
//         setTimeout(() => resolve(), ms);
//       });
//     };
//     await delay(600);
//     const { data } = await axios.get(
//       `http://localhost:3020/pizza?_sort=${sortProperty.property}${
//         sortDesc ? "&_order=desc" : ""
//       }${searchValue ? "&q=" + searchValue : ""}${
//         category > 0 ? "&category=" + category : ""
//       }${"&_page=" + page + "&_limit=" + itemsPerPage}`
//     );
//     return data;
//   }
// );

const initialState = {
  items: cigarettesJSON,
  status: "loading",
};

export const cigarettesSlice = createSlice({
  name: "cigarettes",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     // Add reducers for additional action types here, and handle loading state as needed
  //     builder.addCase(fetchCigarettes.pending, (state, action) => {
  //       state.status = "loading";
  //       state.items = [...new Array(10)];
  //     });
  //     builder.addCase(fetchCigarettes.fulfilled, (state, action) => {
  //       state.items = action.payload;
  //       state.status = "success";
  //     });
  //     builder.addCase(fetchCigarettes.rejected, (state, action) => {
  //       state.status = "error";
  //       state.items = [];
  //     });
  //   },
});

// Action creators are generated for each case reducer function
export const { setItems } = cigarettesSlice.actions;

export default cigarettesSlice.reducer;
