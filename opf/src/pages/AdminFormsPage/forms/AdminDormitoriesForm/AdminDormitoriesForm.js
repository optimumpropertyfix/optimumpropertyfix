import { Outlet } from "react-router-dom";
import styles from "./AdminDormitoriesForm.module.css";
import { FormNavigation } from "../../../../components/Navigation/Navigation";
import { FormNavLink } from "../../../../components/Navigation/Navigation";

export function AdminDormitoriesForm() {
  return (
    <div className={styles.AdminDormitoriesForm}>
      <div className={`${styles.view_container} form_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Manage Student Dormitories
        </p>
        <div className={`${styles.content_container} form_content_layout`}>
          <FormNavigation label="DORMITORY OPTIONS">
            <FormNavLink end to="/admin/forms/dormitories">
              View Dormitories
            </FormNavLink>
            <FormNavLink end to="/admin/forms/dormitories/create">
              Create Dormitory
            </FormNavLink>
          </FormNavigation>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
