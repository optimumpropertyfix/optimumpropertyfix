import { Outlet } from "react-router-dom";
import {
  ViewNavigation,
  ViewNavLink,
} from "../../components/Navigation/Navigation";
import styles from "./MaintenanceRequestsPage.module.css";
import admin_styles from "./AdminMaintenanceRequestsPage.module.css";

export function AdminMaintenanceRequestsPage() {
  return (
    <div className={admin_styles.AdminMaintenanceRequestsPage}>
      <Outlet />
    </div>
  );
}

export function StudentMaintenanceRequestsPage() {
  return (
    <div className={styles.StudentMaintenanceRequestsPage}>
      <Outlet />
      <ViewNavigation label="TICKET OPTIONS" className={styles.view_navigation}>
        <ViewNavLink end icon="list" to="/student/maintenance_requests">
          View Tickets
        </ViewNavLink>
        <ViewNavLink end icon="add" to="create">
          Create Tickets
        </ViewNavLink>
      </ViewNavigation>
    </div>
  );
}
