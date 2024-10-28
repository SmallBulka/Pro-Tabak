import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import itemsJSON from "../../assets/db.json";
import axios from "../../axios";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (type) => {
    const { data } = await axios.get("/product/" + type);

    return data;
  }
);
export const fetchRemoveProduct = createAsyncThunk(
  "products/fetchRemoveProduct",
  async (type, id) => {
    await axios.delete(`/product/${type}/${id}`);
  }
);
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
  product: [],
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

  extraReducers: (builder) => {
    //получение статей
    builder.addCase(fetchProduct.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.status = "error";
      state.product = [];
    });
    //удаление статьи
    builder.addCase(fetchRemoveProduct.pending, (state, action) => {
      console.log(action.meta.arg);
      state.product = state.product.filter(
        (obj) => obj._id !== action.meta.arg
      );
    });
  },
});

// Action creators are generated for each case reducer function
export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
