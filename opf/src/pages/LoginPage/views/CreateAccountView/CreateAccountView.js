import { useEffect, useState } from "react";
import styles from "./CreateAccountView.module.css";
function CreateAccountView() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [UserType, setUserType] = useState("Student");
  const [Email, setEmail] = useState("");
  const [NetID, setNetID] = useState("");
  const [NSHEID, setNSHEID] = useState("");
  const [Gender, setGender] = useState("Male");
  const [Year, setYear] = useState(null);
  const [Password, setPassword] = useState("");

  useEffect(() => {});

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
    let request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serialize_profile()),
    };

    event.preventDefault();
    fetch("/new_user", request);
  };

  const serialize_profile = () => {
    return {
      first_name: FirstName,
      last_name: LastName,
      user_type: UserType,
      email: Email,
      net_id: NetID,
      nshe_Id: NSHEID,
      gender: NSHEID,
      year: Year,
      password: Password,
    };
  };

  return (
    <div className={`${styles.CreateAccountView} layout_helper_ParentSet`}>
      <div className={`${styles.page_title} layout_helper_ChildItem`}>
        <p className="text_page_title">Create an Account</p>
      </div>
      <div className="layout_helper_ChildItem">
        <form className={styles.form} onSubmit={handle_SignUp}>
          <div className="layout_helper_FormGroup">
            <label>First Name</label>
            <input type="text" onChange={handle_FirstName} />
          </div>

          <div className="layout_helper_FormGroup">
            <label>Last Name</label>
            <input type="text" onChange={handle_LastName} />
          </div>

          <div className="layout_helper_FormGroup">
            <label>Who are you?</label>
            <select value={UserType} onChange={handle_UserType}>
              <option value="Student">Student</option>
              <option value="Administrator">Administrator</option>
            </select>
          </div>

          <div className="layout_helper_FormGroup">
            <label>Email Address</label>
            <input type="text" onChange={handle_Email} />
          </div>

          <div className="layout_helper_FormGroup">
            <label>NetID</label>
            <input type="text" onChange={handle_NetID} />
          </div>

          <div className="layout_helper_FormGroup">
            <label>NSHEID</label>
            <input type="text" onChange={handle_NSHEID} />
          </div>

          <div className="layout_helper_FormGroup">
            <label>Who are you?</label>
            <select value={Gender} onChange={handle_Gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="layout_helper_FormGroup">
            <label>Year</label>
            <input type="text" onChange={handle_Year} />
          </div>

          <div className="layout_helper_FormGroup">
            <label>Password</label>
            <input type="text" onChange={handle_Password} />
          </div>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
}

export default CreateAccountView;
