import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-40mbubaekxe48de8.us.auth0.com"
    clientId="9IhWY8rNNMSyKn3xFwGNTT9SweSmwz4S"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);