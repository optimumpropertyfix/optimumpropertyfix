import { useState } from "react";
import FormGroup from "../../../../components/FormGroup/FormGroup";
import styles from "./AdminCreateAdminUser.module.css";
export function AdminCreateAdminUser() {

  const [first_name, set_first_name] = useState("")
  const [last_name, set_last_name] = useState("")
  const [contact_email, set_contact_email] = useState("")
  const [net_id, set_net_id] = useState("")
  const [gender, set_gender] = useState("select")
  const [password, set_password] = useState("")
  const [verify_password, set_verify_password] = useState("")

  const handle_first_name = (event) => {
    set_first_name(event.target.value)
  }

  const handle_last_name = (event) => {
    set_last_name(event.target.value)
  }

  const handle_contact_email = (event) => {
    set_contact_email(event.target.value)
  }

  const handle_net_id = (event) => {
    set_net_id(event.target.value)
  }

  const handle_gender = (event) => {
    set_gender(event.target.value)
  }

  const handle_password = (event) => {
    set_password(event.target.value)
  }

  const handle_verify_password = (event) => {
    set_verify_password(event.target.value)
  }

    return (
        <div className={styles.AdminCreateAdminUser}>
          <div className={`${styles.view_container} view_layout`}>
            <p className={`${styles.page_title_text} page_title_text`}>
                Create Administrator User
            </p>
            <div className={`${styles.content_container} view_content_layout`}>
              <div className={styles.form_fields_container}>
                <div className={styles.form_fields}>
                  <FormGroup label="First Name">
                    <input type="text" placeholder="John" onChange={handle_first_name} value={first_name} />
                  </FormGroup>    
                  <FormGroup label="Last Name">
                    <input type="text" placeholder="Doe" onChange={handle_last_name} value={last_name} />
                  </FormGroup>
                  <FormGroup label="Contact Email" className={styles.contact_email_form}>
                    <input type="text" placeholder="jdoe@nevada.unr.edu" onChange={handle_contact_email} value={contact_email} />
                  </FormGroup>
                  <FormGroup label="NetID">
                    <input type="text" placeholder="jdoe" onChange={handle_net_id} value={net_id} />
                  </FormGroup>
                  <FormGroup label="Gender">
                    <select value={gender} onChange={handle_gender}>
                      <option value="select" disabled>
                        Select Gender
                      </option>
                      <option value="Single">Single</option>
                      <option value="Double">Double</option>
                      <option value="Triple">Triple</option>
                      <option value="Quadruple">Quadruple</option>
                    <option value="Suite">Suite</option>
                    </select>
                  </FormGroup>
                  <FormGroup label="Password">
                    <input type="password" placeholder="Password" onChange={handle_password} value={password} />
                  </FormGroup>
                  <FormGroup label="Re-enter Password">
                    <input type="password" placeholder="Password" onChange={handle_verify_password} value={verify_password} />
                  </FormGroup>
                </div>
              </div>
              <div className={styles.user_options}>
                <button>
                  Create User
                </button>
                <button>
                  Clear Form
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}