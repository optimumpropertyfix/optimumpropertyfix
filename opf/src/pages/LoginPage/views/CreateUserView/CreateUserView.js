import { useState } from "react";
import { new_user_route } from "../../../../Routes";
import { useNavigate } from "react-router-dom";
import FormGroup from "../../../../components/FormGroup/FormGroup";
import styles from "./CreateUserView.module.css";
import login_styles from "../../LoginPage.module.css";
function CreateUserView() {
  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [contact_email, set_contact_email] = useState("");
  const [net_id, set_net_id] = useState("");
  const [nshe_id, set_nshe_id] = useState("");
  const [gender, set_gender] = useState("Select Gender");
  const [year, set_year] = useState("Select Year");
  const [password, set_password] = useState("");

  const navigate = useNavigate();

  const serialize_user = (
    first_name_param,
    last_name_param,
    contact_email_param,
    net_id_param,
    nshe_id_param,
    gender_param,
    year_param,
    password_param
  ) => {
    let user = {
      user_first_name: first_name_param,
      user_last_name: last_name_param,
      user_contact_email: contact_email_param,
      user_net_id: net_id_param,
      user_nshe_id: nshe_id_param,
      user_gender: gender_param,
      user_year: year_param,
      user_password: password_param,
    };

    return JSON.stringify(user);
  };

  const create_user = () => {
    let user = serialize_user(
      first_name,
      last_name,
      contact_email,
      net_id,
      nshe_id,
      gender,
      year,
      password
    );

    let request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: user,
    };

    let route = new_user_route();

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

  const handle_first_name = (event) => {
    set_first_name(event.target.value);
  };

  const handle_last_name = (event) => {
    set_last_name(event.target.value);
  };

  const handle_contact_email = (event) => {
    set_contact_email(event.target.value);
  };

  const handle_net_id = (event) => {
    set_net_id(event.target.value);
  };

  const handle_nshe_id = (event) => {
    set_nshe_id(event.target.value);
  };

  const handle_gender = (event) => {
    set_gender(event.target.value);
  };

  const handle_year = (event) => {
    set_year(event.target.value);
  };

  const handle_password = (event) => {
    set_password(event.target.value);
  };

  const handle_sign_up = (event) => {
    event.preventDefault();
    create_user(
      first_name,
      last_name,
      contact_email,
      net_id,
      nshe_id,
      gender,
      year,
      password
    )
      .then((successful) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.CreateUserView}>
      <p className={`${login_styles.page_title} ${styles.page_title}`}>
        Create Account To Join The Party
      </p>
      <form className={styles.form} onSubmit={handle_sign_up}>
        <FormGroup
          label="First Name"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input type="text" placeholder="John" onChange={handle_first_name} />
        </FormGroup>
        <FormGroup
          label="Last Name"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input type="text" placeholder="Doe" onChange={handle_last_name} />
        </FormGroup>
        <FormGroup
          label="Email Address"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input
            type="text"
            placeholder="example@email.com"
            onChange={handle_contact_email}
          />
        </FormGroup>
        <FormGroup
          label="Password"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input
            type="password"
            placeholder="Password"
            onChange={handle_password}
          />
        </FormGroup>
        <FormGroup
          label="NetID"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input type="text" placeholder="jdoe" onChange={handle_net_id} />
        </FormGroup>
        <FormGroup
          label="NSHEID"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <input
            type="text"
            placeholder="8001234567"
            onChange={handle_nshe_id}
          />
        </FormGroup>
        <FormGroup
          label="Select Gender"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <select value={gender} onChange={handle_gender}>
            <option value="Select Gender" disabled>
              Select Gender
            </option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="NB">Non-binary</option>
          </select>
        </FormGroup>
        <FormGroup
          label="Select Year"
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <select value={year} onChange={handle_year}>
          <option value="Select Year" disabled>
              Select Year
            </option>

            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
            <option value="Graduate">Graduate Student</option>
          </select>
        </FormGroup>
      </form>
      <input
        onClick={handle_sign_up}
        className={`${login_styles.button} ${styles.button}`}
        type="submit"
        value="Sign Up"
      />
    </div>
  );
}

export default CreateUserView;
