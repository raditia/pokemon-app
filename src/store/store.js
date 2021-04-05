import { createStore, combineReducers, applyMiddleware } from "redux";
import { pokemon } from "../store/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  pokemon,
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};
const rootReducers = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducers);

export const configureStore = () =>
  createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
