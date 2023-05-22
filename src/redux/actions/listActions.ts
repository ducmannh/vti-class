import axios from "axios";
import { Dispatch } from 'redux';

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
      const res = await axios.get(
        "https://6456519d5f9a4f236140a83c.mockapi.io/product"
      );
      dispatch(saveListProducts(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};
