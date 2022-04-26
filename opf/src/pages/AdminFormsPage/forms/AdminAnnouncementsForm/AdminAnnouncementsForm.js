import { Outlet } from "react-router-dom";
import styles from "./AdminAnnouncementsForm.module.css";
import { FormNavigation } from "../../../../components/Navigation/Navigation";
import { FormNavLink } from "../../../../components/Navigation/Navigation";

export function AdminAnnouncementsForm() {
  return (
    <div className={styles.AdminAnnouncementsForm}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Manage Student Announcements
        </p>
        <div>
          <FormNavigation label="ANNOUNCEMENT OPTIONS">
            <FormNavLink end to="/admin/forms/announcements" icon="list">
              View Announcements
            </FormNavLink>
            <FormNavLink end to="/admin/forms/announcements/create" icon="add">
              Create Announcement
            </FormNavLink>
          </FormNavigation>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
