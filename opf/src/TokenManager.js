import { useState } from "react";
import { login_route, logout_route } from "./Routes";

function TokenManager() {
  function get_token() {
    const user = localStorage.getItem("token");
    return user && user;
  }

  const [token, setToken] = useState(get_token());

  function generate_token(credentials) {
    let request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: credentials,
    };

    let route = login_route();

    return fetch(route, request)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.access_token);
        return data.isStudent;
      })
      .catch((error) => {
        throw Error(error);
      });
  }

  function revoke_token() {
    let request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    let route = logout_route();

    return fetch(route, request)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        localStorage.removeItem("token");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    generate_token,
    token,
    revoke_token,
  };
}

export default TokenManager;

/*
export function ProtectedRoute(props) {
  const { token } = TokenManager();
  console.log("Protected Route - ", token);
  if (props.isAdmin) {
    if (props.isAdmin === token.admin && token.token) {
      return <>{props.children}</>;
    } else {
      <>
        <Navigate to="/login"></Navigate>
      </>;
    }
  } else {
    if (token.token) {
      return <>{props.children}</>;
    } else {
      return <Navigate to="/login"></Navigate>;
    }
  }
}
*/
