import { Outlet } from "react-router-dom";
import styles from "./AdminAnnouncementsForm.module.css";
import { FormNavigation } from "../../../../components/Navigation/Navigation";
import { FormNavLink } from "../../../../components/Navigation/Navigation";

export function AdminAnnouncementsForm() {
  return (
    <div className={styles.AdminAnnouncementsForm}>
      <div className={`${styles.view_container} form_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Manage Student Announcements
        </p>
        <div className={`${styles.content_container} form_content_layout`}>
          <FormNavigation>
            <FormNavLink end to="/admin/forms/announcements">
              View Announcements
            </FormNavLink>
            <FormNavLink end to="/admin/forms/announcements/create">
              Create Announcements
            </FormNavLink>
          </FormNavigation>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
