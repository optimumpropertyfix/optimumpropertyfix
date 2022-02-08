import { Outlet } from "react-router-dom";
import {
  Navigation,
  NavigationLink,
} from "../../components/Navigation/Navigation";

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
