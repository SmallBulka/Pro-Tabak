import { createSlice } from "@reduxjs/toolkit";
import itemsJSON from "../../assets/db.json";
// export const fetchitems = createAsyncThunk(
//   "users/fetchitemsStatus",
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
  items: itemsJSON,
  status: "loading",
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     // Add reducers for additional action types here, and handle loading state as needed
  //     builder.addCase(fetchitems.pending, (state, action) => {
  //       state.status = "loading";
  //       state.items = [...new Array(10)];
  //     });
  //     builder.addCase(fetchitems.fulfilled, (state, action) => {
  //       state.items = action.payload;
  //       state.status = "success";
  //     });
  //     builder.addCase(fetchitems.rejected, (state, action) => {
  //       state.status = "error";
  //       state.items = [];
  //     });
  //   },
});

// Action creators are generated for each case reducer function
export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
