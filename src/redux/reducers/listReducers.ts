/* eslint-disable @typescript-eslint/no-explicit-any */
const initialState = {
  listProducts: [],
  count: 0,
  selectedProducts: [],
  quantity: 1,
  selectedOneProducts: { quantity: 1 },
};

export const listReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case "listProduct":
      return {
        ...state,
        listProducts: action.payload,
      };
    case "countProduct":
      return {
        ...state,
        count: action.payload,
      };
    case "selectProduct":
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.payload],
      };
    case "selectOneProduct":
      return {
        ...state,
        selectedOneProducts: {
          ...action.payload,
          quantity: state.selectedOneProducts.quantity,
        },
      };
    case "deleteProduct":
      return {
        ...state,
        selectedProducts: state.selectedProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    case "quantityProduct":
      return {
        ...state,
        quantity: action.payload,
      };
    case "resetQuantity":
      return {
        ...state,
        quantity: 1,
      };
    default:
      return state;
  }
};
