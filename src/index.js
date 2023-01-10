import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { Provider } from "react-redux";
import store from "./Redux/Store/index";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist'
import 'react-dotenv'
let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>  
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
