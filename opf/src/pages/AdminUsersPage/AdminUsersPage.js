import { Outlet } from "react-router-dom";
import {
  ViewNavigation,
  ViewNavLink,
} from "../../components/Navigation/Navigation";
import styles from "./AdminUsersPage.module.css";

export function AdminUsersPage() {
  return (
    <div className={`${styles.AdminUsersPage}`}>
      <Outlet/>
      <ViewNavigation
        label="AVAILABLE TOOLS"
        className={styles.view_navigation}
      >
        <ViewNavLink end icon="list" to="/admin/users">
          View Accounts
        </ViewNavLink>
        <ViewNavLink end icon="add" to="/admin/users/create_admin">
          Create Administrator
        </ViewNavLink>
      </ViewNavigation>
    </div>
  );
}
