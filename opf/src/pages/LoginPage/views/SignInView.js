import { useState } from "react";
import AuthenticationManager from "../../../AuthenticationManagement/AuthenticationManager";

function SignInView() {
  let [netid, set_netid] = useState("");
  let [password, set_password] = useState("");
  let { signin } = AuthenticationManager();

  const netid_changeHandler = (event) => {
    set_netid(event.target.value);
  };
  const password_changeHandler = (event) => {
    set_password(event.target.value);
  };
  const authenticate_clickHandler = (event) => {
    event.preventDefault();
    const credentials = {
      net_id: netid,
      password: password,
    };
    signin(credentials, () => {
      console.log(credentials);
    });
  };
  return (
    <div>
      <p>Log In</p>
      <textarea value={netid} onChange={netid_changeHandler}></textarea>
      <p>Password</p>
      <textarea value={password} onChange={password_changeHandler}></textarea>
      <button type="submit" onClick={authenticate_clickHandler}>
        Log In
      </button>
    </div>
  );
}

export default SignInView;
