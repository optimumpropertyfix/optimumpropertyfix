import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import {
  AuthenticationProvider,
  RequireAuthentication,
} from "./AuthenticationManagement/AuthenticationManager";

import App from "./App";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignInView from "./pages/LoginPage/views/SignInView";
import CreateAccountView from "./pages/LoginPage/views/CreateAccountView";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="login" element={<LoginPage />}>
              <Route index element={<SignInView />} />
              <Route path="create" element={<CreateAccountView />} />
            </Route>
          </Route>
        </Routes>
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
