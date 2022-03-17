import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { view_session_route } from "../src/Routes";
import TokenManager from "../src/TokenManager";
import "./App.css";

function App() {
  const { get_token } = TokenManager();

  const get_session = () => {
    let route = view_session_route();

    let request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${get_token()}`,
      },
    };

    return fetch(route, request)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .then((session) => {
        return session;
      })
      .catch((error) => {
        throw Error(error);
      });
  };

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
