import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";

import Store from "./Redux/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}> 
    {/* <React.StrictMode> */}
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    {/* </React.StrictMode> */}
  </Provider>
);
