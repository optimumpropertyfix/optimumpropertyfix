import { useState } from "react";
import { new_account_route } from "../../../../Routes";
import { useNavigate } from "react-router-dom";
import styles from "./CreateAccountView.module.css";
import login_styles from "../../LoginPage.module.css";
function CreateAccountView() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [UserType, setUserType] = useState("Student");
  const [Email, setEmail] = useState("");
  const [NetID, setNetID] = useState("");
  const [NSHEID, setNSHEID] = useState("");
  const [Gender, setGender] = useState("Select Gender");
  const [Year, setYear] = useState(null);
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const serialize_account = (
    first_name,
    last_name,
    user_type,
    contact_email,
    net_id,
    nshe_id,
    gender,
    year,
    password
  ) => {
    let account = {
      first_name: first_name,
      last_name: last_name,
      user_type: user_type,
      contact_email: contact_email,
      net_id: net_id,
      nshe_id: nshe_id,
      gender: gender,
      year: year,
      password: password,
    };

    return JSON.stringify(account);
  };

  const create_account = (
    first_name,
    last_name,
    user_type,
    contact_email,
    net_id,
    nshe_id,
    gender,
    year,
    password
  ) => {
    let account = serialize_account(
      first_name,
      last_name,
      user_type,
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
      body: account,
    };

    let route = new_account_route();

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

  const handle_FirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handle_LastName = (event) => {
    setLastName(event.target.value);
  };

  const handle_UserType = (event) => {
    setUserType(event.target.value);
  };

  const handle_Email = (event) => {
    setEmail(event.target.value);
  };

  const handle_NetID = (event) => {
    setNetID(event.target.value);
  };

  const handle_NSHEID = (event) => {
    setNSHEID(event.target.value);
  };

  const handle_Gender = (event) => {
    setGender(event.target.value);
  };

  const handle_Year = (event) => {
    setYear(event.target.value);
  };

  const handle_Password = (event) => {
    setPassword(event.target.value);
  };

  const handle_SignUp = (event) => {
    event.preventDefault();
    create_account(
      FirstName,
      LastName,
      UserType,
      Email,
      NetID,
      NSHEID,
      Gender,
      Year,
      Password
    )
      .then((successful) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.CreateAccountView}>
      <p className={`${login_styles.page_title} ${styles.page_title}`}>
        Create Account To Join The Party
      </p>
      <form className={styles.form} onSubmit={handle_SignUp}>
        <div
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <label className={`${login_styles.label} ${login_styles.first_name}`}>
            First Name
          </label>
          <input type="text" placeholder="John" onChange={handle_FirstName} />
        </div>
        <div
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <label className={login_styles.label}>Last Name</label>
          <input type="text" placeholder="Doe" onChange={handle_LastName} />
        </div>
        <div
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <label className={login_styles.label}>Email Address</label>
          <input
            type="text"
            placeholder="example@email.com"
            onChange={handle_Email}
          />
        </div>
        <div
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <label className={login_styles.label}>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={handle_Password}
          />
        </div>
        <div
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <label className={login_styles.label}>NetID</label>
          <input type="text" placeholder="jdoe" onChange={handle_NetID} />
        </div>

        <div
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <label className={login_styles.label}>NSHEID</label>
          <input
            type="text"
            placeholder="8001234567"
            onChange={handle_NSHEID}
          />
        </div>
        <div
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <label className={login_styles.label}>Who are you?</label>
          <select value={Gender} onChange={handle_Gender}>
            <option value="Select Gender" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
          </select>
        </div>
        <div
          className={`form_group ${styles.form_group} ${login_styles.form_group}`}
        >
          <label className={login_styles.label}>Year</label>
          <input type="text" placeholder="2018" onChange={handle_Year} />
        </div>
      </form>
      <input
        onClick={handle_SignUp}
        className={`${login_styles.button} ${styles.button}`}
        type="submit"
        value="Sign Up"
      />
    </div>
  );
}

export default CreateAccountView;
