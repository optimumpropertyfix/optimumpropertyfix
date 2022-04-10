import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenManager from "../../../../TokenManager";
import FormGroup from "../../../../components/FormGroup/FormGroup";
import styles from "./SignInView.module.css";
import login_styles from "../../LoginPage.module.css";
function SignInView() {
  const [net_id, set_net_id] = useState("");
  const [password, set_password] = useState("");

  const { generate_token } = TokenManager();
  const navigate = useNavigate();

  const serialize_credentials = (net_id_param, password_param) => {
    let credentials = {
      user_net_id: net_id_param,
      user_password: password_param,
    };

    return JSON.stringify(credentials);
  };

  const handle_net_id = (event) => {
    set_net_id(event.target.value);
  };
  const handle_password = (event) => {
    set_password(event.target.value);
  };

  const handle_login = (event) => {
    event.preventDefault();

    let credentials = serialize_credentials(net_id, password);

    generate_token(credentials)
      .then((user_is_student) => {
        if (user_is_student) {
          navigate("/student");
        } else {
          navigate("/admin");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset_password = (event) => {
    event.preventDefault();
    navigate("/login/reset");
  };

  return (
    <div className={styles.SignInView}>
      <p className={`${login_styles.page_title} ${styles.page_title}`}>
        Let's Get You Signed In
      </p>
      <form className={styles.form}>
        <FormGroup
          label="NetID"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input
            onChange={handle_net_id}
            type="text"
            placeholder="NetID"
          />
        </FormGroup>
        <FormGroup
          label="Password"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input
            onChange={handle_password}
            type="password"
            placeholder="Password"
          />
        </FormGroup>
      </form>
      <div className={styles.signin_options}>
        <input
          onClick={handle_login}
          className={`${login_styles.button} ${styles.button}`}
          type="submit"
          value="Sign In"
        />
        <button
          onClick={reset_password}
          className={`${login_styles.button} ${styles.reset_password_button}`}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default SignInView;
