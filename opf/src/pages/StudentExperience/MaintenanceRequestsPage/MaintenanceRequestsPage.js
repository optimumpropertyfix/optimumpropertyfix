import { Outlet } from "react-router-dom";
import {
  Navigation,
  NavigationLink,
} from "../../../components/Navigation/Navigation";

function MaintenanceRequestsPage() {
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

export default MaintenanceRequestsPage;
