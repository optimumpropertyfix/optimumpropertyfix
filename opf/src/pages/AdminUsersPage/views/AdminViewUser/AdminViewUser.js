import styles from "./AdminViewUser.module.css";
import Timestamps from "../../../../components/Timestamps/Timestamps";
import AccountCard from "../../../../components/AccountCard/AccountCard";
import FormGroup from "../../../../components/FormGroup/FormGroup";
import { useState } from "react";


export function AdminViewUser() {

    const user_profile = {}

    const [current_password, set_current_password] = useState("")
    const [new_password, set_new_password] = useState("")
    const [verify_password, set_verify_password] = useState("")

    const handle_current_password = (event) => {
      set_current_password(event.target.value)
    }
  
    const handle_new_password = (event) => {
      set_new_password(event.target.value)
    }
  
    const handle_verify_password = (event) => {
      set_verify_password(event.target.value)
    }

    const update_password_click = (event) => {

    }


    return (
        <div className={styles.AdminViewUser}>
          <div className={`${styles.view_container} view_layout`}>
            <p className={`${styles.page_title_text} page_title_text`}>
                Viewing User "Name"
            </p>
            <div className={`${styles.content_container} view_content_layout`}>
              <div className={styles.account_profile_container}>
                <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
                  Your Account Profile
                </p>
                <div className={styles.account_profile}>
                  <AccountCard {...user_profile} className={styles.AccountCard}/>
                  <Timestamps 
                  updated_at={user_profile.user_updated_account}
                  created_at={user_profile.user_account_created}/>
                </div>
              </div>
            <div className={styles.security_settings}>
              <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
                Security Settings
              </p>
              <div className={styles.credentials_settings}>
                <div className={styles.credentials_forms}>
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
            <div className={styles.user_options_container}>
              <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
                Account Options
              </p>
              <div className={styles.user_options}>
                <button>
                  Disable User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
}