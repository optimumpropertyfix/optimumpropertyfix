import { useState } from "react";
import { login_route, logout_route } from "./Routes";

function SessionManager() {
  function get_user() {
    const user = localStorage.getItem("user");
    return user && user;
  }

  const [user, setUser] = useState(get_user());

  function create_session(credentials) {
    let request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: credentials,
    };

    let route = login_route();

    fetch(route, request)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("user", {
          access_token: data.access_token,
          first_name: data.first_name,
          last_name: data.last_name,
          netid: data.netid,
          role: data.role,
        });
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

  function revoke_session() {
    let request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    let route = logout_route();

    fetch(route, request)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        localStorage.removeItem("user");
        return true;
      })
      .then((data) => {
        localStorage.setItem("user", {
          access_token: data.access_token,
          first_name: data.first_name,
          last_name: data.last_name,
          netid: data.netid,
          role: data.role,
        });
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

  return {
    create_session,
    user,
    revoke_session,
  };
}

export default SessionManager;

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
