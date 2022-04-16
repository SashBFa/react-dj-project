import React from "react";
import * as ReactDOMClient from "react-dom/client";
// import { Provider } from "react-redux";
// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import rootReducer from "./assets/redux/reducers";
import App from "./App";
import "./assets/styles/index.scss";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

root.render(
  // <Provider store={store}>
  <App />
  // </Provider>
);
