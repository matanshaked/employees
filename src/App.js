import React from "react";
import { Provider } from "react-redux";
import { getStoreInstance } from "./sdk";
import Pages from "./pages";
import "./styles/index.scss";

const store = getStoreInstance();

const App = () => (
  <div>
    <Provider store={store}>
      <Pages />
    </Provider>
  </div>
);

export default App;
