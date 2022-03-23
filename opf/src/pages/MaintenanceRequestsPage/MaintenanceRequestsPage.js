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
    <div className="section_helper_Section">
      <Outlet />
      <ViewNavigation className="section_helper_NavigationSection">
        <ViewNavLink icon="list" to="/student/maintenance_requests">
          View Tickets
        </ViewNavLink>
        <ViewNavLink icon="add" to="create">
          Create Tickets
        </ViewNavLink>
      </ViewNavigation>
    </div>
  );
}
