/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../instanceAxios.";

interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface State {
  selectedProducts: ProductType[];
  listProducts: ProductType[];
  count: number;
  quantity: number;
  selectedOneProducts: any;
}

const initialState: State = {
  listProducts: [],
  count: 0,
  selectedProducts: [],
  quantity: 1,
  selectedOneProducts: { quantity: 1 },
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    saveListProduct: (state, action) => {
      state.listProducts = action.payload;
    },
    countProduct: (state, action) => {
      state.count = action.payload;
    },
    selectProduct: (state, action: PayloadAction<ProductType>) => {
      state.selectedProducts = [...state.selectedProducts, action.payload];
    },
    selectOneProduct: (state, action) => {
      state.selectedOneProducts = {
        ...action.payload,
        quantity: state.quantity,
      };
    },
    deleteProduct: (state, action) => {
      state.selectedProducts = state.selectedProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    quantityProduct: (state, action) => {
      state.quantity = action.payload;
    },
    resetQuantity: (state) => {
      state.quantity = 1;
    },
  },
});

export const {
  saveListProduct,
  countProduct,
  selectProduct,
  selectOneProduct,
  deleteProduct,
  quantityProduct,
  resetQuantity,
} = listSlice.actions;

export const getLists = () => async (dispatch: Dispatch) => {
  try {
    const res = await instance.get("/product");
    dispatch(saveListProduct(res.data));
  } catch (error) {
    console.log(error);
  }
};

export default listSlice.reducer;
