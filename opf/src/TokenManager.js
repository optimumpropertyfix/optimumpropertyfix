import { useState } from "react";
import { Navigate } from "react-router-dom";

function TokenManager() {
  function get_token() {
    const access_token = localStorage.getItem("token");
    return access_token && access_token;
  }

  const [token, setToken] = useState(get_token());

  function generate_token(credentials) {
    fetch("/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", {
          token: data.token,
          admin: data.isAdmin,
        });
        setToken({
          token: data.token,
          admin: data.isAdmin,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function revoke_token() {
    fetch("/revoke", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.removeItem("token");
    setToken(null);
  }

  return {
    generate_token,
    token,
    revoke_token,
  };
}

export default TokenManager;

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
