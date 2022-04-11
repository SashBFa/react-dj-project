import React from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
// import "./assets/styles/style.scss";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<App />);
