import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-5veu0fmooxaf6xiu.us.auth0.com"
    clientId="wXwuSZlISNexp1GFYBU2MEXKKE0J04oH"
    authorizationParams={{
      redirect_uri:"http://localhost:5173/"
    }}
    audience ="http://localhost:8000"
    >

    <App />


    </Auth0Provider>
  </React.StrictMode>
);
