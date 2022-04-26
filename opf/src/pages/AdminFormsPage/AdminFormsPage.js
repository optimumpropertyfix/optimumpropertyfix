import { Outlet } from "react-router-dom";
import {
  ViewNavigation,
  ViewNavLink,
} from "../../components/Navigation/Navigation";
import styles from "./AdminFormsPage.module.css";

export function AdminFormsPage() {
  return (
    <div className={`${styles.AdminFormsPage}`}>
      <Outlet/>
      <ViewNavigation
        label="AVAILABLE FORMS"
        className={styles.view_navigation}
      >
        <ViewNavLink icon="add" to="/admin/forms/announcements">
          Manage Announcements
        </ViewNavLink>
        <ViewNavLink icon="add" to="/admin/forms/frequently_asked_questions">
          Manage Frequently Asked Questions
        </ViewNavLink>
        <ViewNavLink icon="add" to="/admin/forms/dormitories">
          Manage Dormitories
        </ViewNavLink>
      </ViewNavigation>
    </div>
  );
}
