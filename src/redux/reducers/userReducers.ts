/* eslint-disable @typescript-eslint/no-explicit-any */
const initialState = {
  username: "",
  password: "",
};

export const userReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };

    default:
      return state;
  }
};
