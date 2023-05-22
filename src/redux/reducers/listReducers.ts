interface ListProductType {
    type: string,
    payload: string[]
}

const initialState = {
  listProducts: [],
};

export const listReducers = (state = initialState, action: ListProductType) => {
  switch (action.type) {
    case "listProduct":
      return {
        ...state,
        listProducts: action.payload,
      };
    default:
      return state;
  }
};
