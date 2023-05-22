import { applyMiddleware, combineReducers, createStore } from "redux";
import { listReducers } from "./reducers/listReducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ list: listReducers });

export const store = createStore(rootReducer, applyMiddleware(thunk));
