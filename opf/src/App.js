import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { view_session_route } from "../src/Routes";
import TokenManager from "../src/TokenManager";
import "./App.css";

function App() {
  const { token } = TokenManager();

  const get_session = () => {
    let route = view_session_route();

    let request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
        console.log(session);
      });
  };

  const handle_get = () => {
    get_session();
  };

  return (
    <div className="App">
      <Outlet />
      <button onClick={handle_get}></button>
    </div>
  );
}

export default App;
