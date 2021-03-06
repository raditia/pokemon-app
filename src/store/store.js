import { createStore, combineReducers, applyMiddleware } from "redux";
import { pokemon } from "./reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  pokemon,
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['pokemon']
};
const rootReducers = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const configureStore = () =>
  createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
