import { Outlet } from "react-router-dom";
import {
  Navigation,
  NavigationLink,
  ViewNavigation,
  ViewNavLink,
} from "../../components/Navigation/Navigation";
import styles from "./MaintenanceRequestsPage.module.css";

export function AdminMaintenanceRequestsPage() {
  return (
    <div>
      <div>
        <Navigation>
          <NavigationLink end to="/admin/maintenance_requests">
            Tickets
          </NavigationLink>
          <NavigationLink to="create">Create Ticket</NavigationLink>
        </Navigation>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export function StudentMaintenanceRequestsPage() {
  return (
    <div
      className={`section_helper_Section ${styles.StudentMaintenanceRequestsPage}`}
    >
      <div className="section_helper_OutletContainer">
        <Outlet />
      </div>
      <ViewNavigation className="section_helper_NavigationLayout">
        <ViewNavLink icon="list" end to="/student/maintenance_requests">
          View Tickets
        </ViewNavLink>
        <ViewNavLink icon="add" to="create">
          Create Ticket
        </ViewNavLink>
      </ViewNavigation>
    </div>
  );
}
