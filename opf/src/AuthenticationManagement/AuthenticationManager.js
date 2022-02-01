import React, { useState, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AuthenticationContext = React.createContext("");

function UseAuthentication() {
  return useContext(AuthenticationContext);
}

function AuthenticationProvider(props) {
  let [token, setToken] = useState("");

  let sign_in = (credential, callback) => {
    fetch("/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setToken(data.token);
        localStorage.setItem("token", data.token);
      })
      .catch((error) => {
        console.log(error);
      });

    callback();
  };

  let sign_out = (callback) => {
    fetch("/revoke", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.removeItem("token");
      })
      .catch((error) => {
        console.log(error);
      });
    callback();
  };

  let value = { token, sign_in, sign_out };
  return (
    <AuthenticationContext.Provider value={value}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}

function RequireAuthentication(props) {
  let location = useLocation();
  if (localStorage.getItem("token") == null) {
    console.log("Erro");
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return <>{props.children}</>;
  }
}

export { UseAuthentication, AuthenticationProvider, RequireAuthentication };
