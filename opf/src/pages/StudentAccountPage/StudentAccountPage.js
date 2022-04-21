import AccountCard from "../../components/AccountCard/AccountCard";
import styles from "./StudentAccountPage.module.css";
import FormGroup from "../../components/FormGroup/FormGroup";
import Timestamps from "../../components/Timestamps/Timestamps";
import calneva_profile_picture from "../../assets/profile_pictures/calneva.jpeg"

export default function StudentAccountPage(props) {
  const user_profile = {
    first_name: "Araam",
    last_name: "Zaremehrjardi",
    gender: "Male",
    is_student: true,
    contact_email: "azaremehrjardi@nevada.unr.com",
    net_id: "azaremehrjardi",
    nshe_id: "8001075491",
    account_created: "07/08/2018",
  };

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
              <AccountCard user={user_profile} />
              <Timestamps 
              updated_at={"03 13 2022 00 45 00"}
              created_at={"03 13 2022 01 33 32"}/>
            </div>
          </div>
          <div className={styles.account_settings_container}>
            <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
              Account Information Settings
            </p>
            <div className={styles.account_settings}>
              <div className={styles.form}>
                <FormGroup label="First Name">
                  <input type="text" placeholder="John" /> 
                </FormGroup>
                <FormGroup label="Last Name">
                  <input type="text" placeholder="Doe" /> 
                </FormGroup>
                <FormGroup label="Contact Email">
                  <input type="text" placeholder="jdoe@nevada.unr.edu" /> 
                </FormGroup>
                <FormGroup label="Gender">
                  <select>
                    <option value="Select Gender" disabled>
                      Select Gender
                    </option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="NB">Non-binary</option>
                  </select>
                </FormGroup>
              </div>
              <div className={styles.options}>
                <button>
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
                  <input type="password" placeholder="Current Password" /> 
                </FormGroup>
                <FormGroup label="New Password">
                  <input type="password" placeholder="New Password" /> 
                </FormGroup>
                <FormGroup label="Re-enter New Password">
                  <input type="password" placeholder="Re-enter New Password" /> 
                </FormGroup>
              </div>
              <div className={styles.options}>
                <button>
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
