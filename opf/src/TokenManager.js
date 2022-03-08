import { login_route, logout_route } from "./Routes";
import { Navigate } from "react-router-dom";
import { view_session_route } from "../src/Routes";
import { useEffect, useState } from "react";

function TokenManager() {
  function get_token() {
    const user = localStorage.getItem("token");
    return user && user;
  }

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
        throw Error(error);
      });
  }

  return {
    generate_token,
    get_token,
    revoke_token,
  };
}

export default TokenManager;

export function ProtectedRoute(props) {
  const { get_token, revoke_token } = TokenManager();
  const [allow, setAllow] = useState(false);

  useEffect(() => {
    get_session();
  });

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
        console.log(session.isStudent + " " + props.permission_group);
        if (session.isStudent === props.permission_group) {
          setAllow(true);
        } else {
          setAllow(false);
        }
      })
      .catch((error) => {
        throw Error(error);
      });
  };

  if (allow) {
    return <>{props.childern}</>;
  } else {
    revoke_token();
    return <Navigate to="/login" />;
  }
}
