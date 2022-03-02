import SessionManager from "../../SessionManager";

const serialize_credentials = (netid, password) => {
  let credentials = {
    netid: netid,
    password: password,
  };

  return JSON.stringify(credentials);
};

const login_user = (credentials, provider) => {
  return provider(credentials);
};

export { serialize_credentials, login_user };
