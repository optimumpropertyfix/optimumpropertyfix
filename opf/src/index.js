import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignInView from "./pages/LoginPage/views/SignInView";
import CreateAccountView from "./pages/LoginPage/views/CreateAccountView/CreateAccountView";

import AdminPage from "./pages/AdminPage/AdminPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<LoginPage />}>
            <Route index element={<SignInView />} />
            <Route path="create" element={<CreateAccountView />} />
          </Route>
          <Route path="admin" element={<AdminPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
