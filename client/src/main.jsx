import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "react-auth-kit";
import { BrowserRouter } from "react-router-dom";
import createStore from 'react-auth-kit/createStore';

const store = createStore({
 authName:'_auth',
 authType:'cookie',
 cookieDomain: window.location.hostname,
//  cookieSecure: window.location.protocol === 'https:'
cookieSecure: false
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthProvider
      authType={"cookie"}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={false} // True if only https
    > */}
    {/* <AuthProvider store={store}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </AuthProvider> */}
  </React.StrictMode>
);
