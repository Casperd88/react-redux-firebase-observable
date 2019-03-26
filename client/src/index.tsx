import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthProvider from "./components/AuthProvider";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <StoreProvider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StoreProvider>,
  document.getElementById("root")
);
