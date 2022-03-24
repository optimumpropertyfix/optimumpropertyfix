import { Outlet } from "react-router-dom";
import {
  SectionNavigation,
  SectionNavLink,
  ViewNavigation,
  ViewNavLink,
} from "../../components/Navigation/Navigation";
import styles from "./MaintenanceRequestsPage.module.css";

export function AdminMaintenanceRequestsPage() {
  return (
    <div>
      <div></div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export function StudentMaintenanceRequestsPage() {
  return (
    <div className={styles.StudentMaintenanceRequestsPage}>
      <Outlet className={styles.view_outlet} />
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
