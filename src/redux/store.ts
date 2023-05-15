import { combineReducers, createStore } from "redux";
import { userReducers } from "./reducers/userReducers";

const rootReducer = combineReducers({
  user: userReducers,
});

export const store = createStore(rootReducer);
