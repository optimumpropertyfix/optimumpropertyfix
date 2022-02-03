import * as React from "react";
import TokenManager from "./TokenManager";

const AuthenticationContext = React.createContext();

function useAuthentication() {
  const [session, setSession] = React.useState({
    alive: false,
    token: null,
  });

  React.useEffect(() => {
    let token = TokenManager.get_token();
    if (token) {
      setSession({
        alive: true,
        token: token,
      });
    }
  }, []);

  return {
    session,
    signin(credentials, callback) {
      TokenManager.generate_token(credentials);
      setSession({
        alive: true,
        token: TokenManager.get_token(),
      });
      callback();
    },
    signout(callback) {
      TokenManager.revoke_token();
      setSession({
        alive: false,
        token: null,
      });
      callback();
    },
  };
}

export function AuthenticationProvider(props) {
  let session = useAuthentication();

  return (
    <AuthenticationContext.Provider value={session}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}

export default function AuthenticationConsumer() {
  return React.useContext(AuthenticationContext);
}

export function RequireAuthentication(props) {
  const { session } = useAuthentication();
  const alive = session.alive;
  if (!alive) {
    return (
      <div>
        <p>Not Allowed</p>
      </div>
    );
  }
  return props.children;
}
