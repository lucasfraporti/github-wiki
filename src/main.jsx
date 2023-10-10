import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import GlobalStyles from "./styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
