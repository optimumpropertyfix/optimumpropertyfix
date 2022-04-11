import FormGroup from "../../../../components/FormGroup/FormGroup";
import styles from "./ResetPasswordView.module.css";
import login_styles from "../../LoginPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { reset_password_route } from "../../../../Routes"
function ResetPasswordView() {

  const [net_id, set_net_id] = useState("")
  const [nshe_id, set_nshe_id] = useState("")
  const [password, set_password] = useState("")

  const navigate = useNavigate()

  const serialize_credentials = (
    net_id_param,
    nshe_id_param,
    password_param
  ) => {
    let credentials = {
      user_net_id: net_id_param,
      user_nshe_id: nshe_id_param,
      user_password: password_param
    };

    return JSON.stringify(credentials)
  }

  const reset_password = () => {
    let credentials = serialize_credentials(net_id, 
      nshe_id, 
      password);

      let request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: credentials,
      };

      let route = reset_password_route();

      return fetch(route, request)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return true;
      })
      .catch((error) => {
        throw Error(error);
      });
  };

  const handle_net_id = (event) => {
    set_net_id(event.target.value);
  };

  const handle_nshe_id = (event) => {
    set_nshe_id(event.target.value);
  };

  const handle_password = (event) => {
    set_password(event.target.value);
  };

  const validate_password_match = (event) => {

  }

  const validate_nonempty_field = (event) => {

  }

  const handle_reset_password = (event) => {
    reset_password().then((successful) => {
      navigate("/login");
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className={styles.ResetPasswordView}>
      <p className={`${login_styles.page_title} ${styles.page_title}`}>
        Reset Your Password
      </p>
      <form className={styles.form}>
        <FormGroup
          label="NetID"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input onChange={handle_net_id} type="text" placeholder="NetID" />
        </FormGroup>
        <FormGroup
          label="NSHEID"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input onChange={handle_nshe_id} type="text" placeholder="NSHEID" />
        </FormGroup>
        <FormGroup
          label="Password"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input onChange={handle_password} type="password" placeholder="Password" />
        </FormGroup>
        <FormGroup
          label="Re-enter Password"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input type="password" placeholder="Re-enter Password" />
        </FormGroup>
      </form>
      <input
        onClick={handle_reset_password}
        className={`${login_styles.button} ${styles.button}`}
        type="submit"
        value="Reset Password"
      />
    </div>
  );
}

export default ResetPasswordView;
