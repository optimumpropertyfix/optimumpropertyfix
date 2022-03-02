import { useState } from "react";
import { serialize_credentials, login_user } from "../../LoginLogic";
import SessionManager from "../../../../SessionManager";
import styles from "./SignInView.module.css";
function SignInView() {
  const [NetID, setNetID] = useState("");
  const [password, setPassword] = useState("");
  const { create_session } = SessionManager();

  const handle_submit = (event) => {
    event.preventDefault();
    let credentials = serialize_credentials(NetID, password);
    login_user(credentials, create_session);
  };

  const handle_passwordNetID = (event) => {
    event.preventDefault();
    setNetID(event.target.value);
  };
  const handle_passwordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  return (
    <div className={styles.SignInView}>
      <p className={`${styles.page_title} text_page_title`}>Sign In</p>
      <form className={styles.form}>
        <div className="layout_helper_FormGroup">
          <label>NetID</label>
          <input onChange={handle_passwordNetID} type="text" />
        </div>
        <div className="layout_helper_FormGroup">
          <label>Password</label>
          <input onChange={handle_passwordChange} type="text" />
        </div>
        <input onClick={handle_submit} type="submit" value="Sign In" />
      </form>
    </div>
  );
}

export default SignInView;
