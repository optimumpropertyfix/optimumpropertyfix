import AccountCard from "../../components/AccountCard/AccountCard";
import styles from "./StudentAccountPage.module.css";
import FormGroup from "../../components/FormGroup/FormGroup";
import Timestamps from "../../components/Timestamps/Timestamps";
import calneva_profile_picture from "../../assets/profile_pictures/calneva.jpeg"
import { useEffect, useState } from "react";
import TokenManager from "../../TokenManager";
import { view_current_user_route, user_reset_account_info_route, user_update_password } from "../../Routes"

export default function StudentAccountPage(props) {
  const { get_token } = TokenManager()
  const [user_profile, set_user_profile] = useState({})
  const [first_name, set_first_name] = useState("")
  const [last_name, set_last_name] = useState("")
  const [contact_email, set_contact_email] = useState("")
  const [gender, set_gender] = useState("select")

  const [current_password, set_current_password] = useState("")
  const [new_password, set_new_password] = useState("")
  const [verify_password, set_verify_password] = useState("")

  useEffect(() => {

    const options = {
      method: "GET",
      headers: {
        'Authorization' : `Bearer ${get_token()}`,
      },
    };
    const route = view_current_user_route();

    fetch(route, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((user) => {
        set_user_profile(user)
        set_first_name(user.user_first_name)
        set_last_name(user.user_last_name)
        set_contact_email(user.user_contact_email)
        set_gender(user.user_gender)
        console.log(user)
      })
      .catch((error) => {
        console.log(error);
      });

  }, [])

  const handle_gender = (event) => {
    set_gender(event.target.value)
  }

  const handle_first_name = (event) => {
    set_first_name(event.target.value)
  }

  const handle_last_name = (event) => {
    set_last_name(event.target.value)
  }

  const handle_contact_email = (event) => {
    set_contact_email(event.target.value)
  }

  const handle_current_password = (event) => {
    set_current_password(event.target.value)
  }

  const handle_new_password = (event) => {
    set_new_password(event.target.value)
  }

  const handle_verify_password = (event) => {
    set_verify_password(event.target.value)
  }

  const serialize_user_information = (
    first_name_param,
    last_name_param,
    contact_email_param,
    gender_param,
  ) => {
    let user = {
      user_first_name: first_name_param,
      user_last_name: last_name_param,
      user_contact_email: contact_email_param,
      user_gender: gender_param,
    };
    return JSON.stringify(user);
  };

  const serialize_user_credentials = (
    current_password_param,
    new_password_param
  ) => {
    let credentials = {
      user_current_password: current_password_param,
      user_new_password: new_password_param,
    };
    return JSON.stringify(credentials);
  };

  const api_update_credentials = () => {
    let user_credentials = serialize_user_credentials(
      current_password, new_password
    );

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Authorization' : `Bearer ${get_token()}`,
      },
      body: user_credentials
    }; 
    const route = user_update_password();

    fetch(route, options);

  }

  const api_update_account = () => {
    let user_information = serialize_user_information(
      first_name,
      last_name,
      contact_email,
      gender,
    );

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Authorization' : `Bearer ${get_token()}`,
      },
      body: user_information
    }; 
    const route = user_reset_account_info_route();

    fetch(route, options);

  }

  const api_refresh_profile = () => {

    const options = {
      method: "GET",
      headers: {
        'Authorization' : `Bearer ${get_token()}`,
      },
    };
    const route = view_current_user_route();

    fetch(route, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(`${response.statusText} - ${response.status}`);
        }
        return response.json();
      })
      .then((user) => {
        set_user_profile(user)
        console.log(user)
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const update_account_click = () => {
    api_update_account()
    api_refresh_profile()
  }

  const update_password_click = () => {
    api_update_credentials()
  }

  return (
    <div className={`${styles.StudentAccountPage}`}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Your Account Details
        </p>
        <div className={`${styles.content_container} view_content_layout`}> 
          <div className={styles.account_profile_container}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Your Account Profile
            </p>
            <div className={styles.account_profile}>
              <AccountCard {...user_profile} />
              <Timestamps 
              updated_at={user_profile.user_updated_account}
              created_at={user_profile.user_account_created}/>
            </div>
          </div>
          <div className={styles.account_settings_container}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Account Information Settings
            </p>
            <div className={styles.account_settings}>
              <div className={styles.form}>
                <FormGroup label="First Name">
                  <input type="text" onChange={handle_first_name} value={first_name} placeholder={user_profile.user_first_name} /> 
                </FormGroup>
                <FormGroup label="Last Name">
                  <input type="text" value={last_name} onChange={handle_last_name} placeholder={user_profile.user_last_name} /> 
                </FormGroup>
                <FormGroup label="Contact Email">
                  <input type="text" value={contact_email} onChange={handle_contact_email} placeholder={user_profile.user_contact_email} /> 
                </FormGroup>
                <FormGroup label="Gender">
                  <select value={gender} onChange={handle_gender}>
                    <option value="select" disabled>
                      Select Gender
                    </option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="NB">Non-binary</option>
                  </select>
                </FormGroup>
              </div>
              <div className={styles.options}>
                <button onClick={update_account_click}>
                  Update Account
                </button>
              </div>
            </div>
          </div>
          <div className={styles.security_settings}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Security Settings
            </p>
            <div className={styles.account_settings}>
              <div className={styles.form}>
                <FormGroup label="Current Password">
                  <input onChange={handle_current_password} value={current_password} type="password" placeholder="Current Password" /> 
                </FormGroup>
                <FormGroup label="New Password">
                  <input onChange={handle_new_password} value={new_password} type="password" placeholder="New Password" /> 
                </FormGroup>
                <FormGroup label="Re-enter New Password">
                  <input onChange={handle_verify_password} value={verify_password} type="password" placeholder="Re-enter New Password" /> 
                </FormGroup>
              </div>
              <div className={styles.options}>
                <button onClick={update_password_click}>
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
