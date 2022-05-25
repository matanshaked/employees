import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import widgets from "../widgets/widgetsApis";

let storeInstance;
const createStoreInstance = () => {
  const reducerMap = {};
  widgets.forEach((widget) => {
    reducerMap[widget.config.sliceName] = widget.reducer;
  });
  return configureStore(
    { reducer: combineReducers(reducerMap) },
    // eslint-disable-next-line no-undef

    (!process.env.NODE_ENV || process.env.NODE_ENV === "development") &&
      composeWithDevTools()
  );
};
export const getStoreInstance = () => {
  if (!storeInstance) {
    storeInstance = createStoreInstance();
  }
  return storeInstance;
};

let instance;
const createInstance = () => {
  const apis = {};
  widgets.forEach((widget) => {
    const api = widget.api;
    apis[widget.config.apiName] = new api(getStoreInstance(), apis);
  });
  return apis;
};

export const getInstance = () => {
  if (!instance) {
    instance = createInstance();
  }
  return instance;
};

const exportedObject = {
  getStoreInstance,
  getInstance,
};

export default exportedObject;
