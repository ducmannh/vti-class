import { Dispatch } from "redux";
import { instance } from "../../instanceAxios.";

interface ListProductType {
  id: number;
  name: string;
  price: string;
  image: string;
}

export const saveListProducts = (data: ListProductType) => {
  return {
    type: "listProduct",
    payload: data,
  };
};

export const getListProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await instance.get("/product");
      dispatch(saveListProducts(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const countProduct = (data: { count: number }) => {
  return {
    type: "countProduct",
    payload: data,
  };
};

export const selectedProduct = (data: ListProductType) => {
  return {
    type: "selectProduct",
    payload: data,
  };
};

export const selectedOneProduct = (data: ListProductType) => {
  return {
    type: "selectOneProduct",
    payload: data,
  };
};

export const deleteProduct = (id: number) => {
  return {
    type: "deleteProduct",
    payload: id,
  };
};

export const quantityProduct = (data: { quantity: number }) => {
  return {
    type: "quantityProduct",
    payload: data,
  };
};

export const resetQuantity = () => {
  return {
    type: "resetQuantity",
  };
}