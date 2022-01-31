// https://reactrouter.com/docs/en/v6/examples/auth
const AuthenticationAPI = {

  isAuthenticated: false,

  sign_in = (credentials, callback) => {

    fetch('/token', {
        
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials)

    })

    callback()
  }




};

const AuthenticationContext = React.createContext({
  user: {},
  log_in,
  log_out,
});

function AuthenticationProvider(childern) {
  let [user, setUser] = React.useState(null);

  let sign_in = newUser;
}

export default AuthenticationProvider;
