import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import TokenManger from "./TokenManager";

let AuthenticationContext = React.createContext(null);

function UseAuthentication() {
  return React.useContext(AuthenticationContext);
}

function AuthenticationProvider(props) {
  let [token, setToken] = useState("");

  let sign_in = (credential, callback) => {
    TokenManger.generate_token(credential);
    setToken(
      TokenManger.generate_token({
        net_id: "testing net_id",
        password: "testing password",
      })
    );
    callback();
  };

  let sign_out = (callback) => {
    TokenManger.revoke_token();
    callback();
  };

  return (
    <AuthenticationContext.Provider value={{ token, sign_in, sign_out }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}

function RequireAuthentication(props) {
  let authentication = UseAuthentication();
  let location = useLocation();

  if (authentication.access_token == null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{props.childern}</>;
}

export { UseAuthentication, AuthenticationProvider, RequireAuthentication };
