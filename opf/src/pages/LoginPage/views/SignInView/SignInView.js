import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenManager from "../../../../TokenManager";
import styles from "./SignInView.module.css";
import login_styles from "../../LoginPage.module.css";
function SignInView() {
  const [NetID, setNetID] = useState("");
  const [password, setPassword] = useState("");

  const { generate_token } = TokenManager();
  const navigate = useNavigate();

  const serialize_credentials = (net_id, password) => {
    let credentials = {
      net_id: net_id,
      password: password,
    };

    return JSON.stringify(credentials);
  };

  const handle_passwordNetID = (event) => {
    setNetID(event.target.value);
  };
  const handle_passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handle_SignIn = (event) => {
    event.preventDefault();

    let credentials = serialize_credentials(NetID, password);
    generate_token(credentials)
      .then((isStudent) => {
        if (isStudent) {
          navigate("/student");
        } else {
          navigate("/admin");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.SignInView}>
      <p className={`${login_styles.page_title} ${styles.page_title}`}>
        Let's Get You Signed In
      </p>
      <form className={styles.form}>
        <div
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <label className={login_styles.label}>NetID</label>
          <input onChange={handle_passwordNetID} type="text" />
        </div>
        <div
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <label className={login_styles.label}>Password</label>
          <input onChange={handle_passwordChange} type="text" />
        </div>
      </form>
      <input
        onClick={handle_SignIn}
        className={`${login_styles.submit_button} ${styles.submit_button}`}
        type="submit"
        value="Sign In"
      />
    </div>
  );
}

export default SignInView;
