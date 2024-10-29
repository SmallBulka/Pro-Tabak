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

const initialState = {
  product: [],
  items: itemsJSON,
  status: "loading",
  isEditor: false,
  currentProduct: {},
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setIsEditor: (state) => {
      state.isEditor = true;
    },
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    setProductProperty: (state, action) => {
      state.currentProduct[action.payload.property] = action.payload.text;
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
    //удаление продукта
    builder.addCase(fetchRemoveProduct.pending, (state, action) => {
      console.log(action.meta.arg);
      state.product = state.product.filter(
        (obj) => obj._id !== action.meta.arg
      );
    });
  },
});

export const { setItems, setIsEditor, setCurrentProduct, setProductProperty } =
  itemsSlice.actions;

export default itemsSlice.reducer;
