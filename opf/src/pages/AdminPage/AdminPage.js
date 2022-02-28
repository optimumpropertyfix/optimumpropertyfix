import { Outlet } from "react-router-dom";
import {
  Navigation,
  NavigationLink,
} from "../../components/Navigation/Navigation";

function AdminPage() {
  return (
    <div>
      <Navigation>
        <NavigationLink end to="/admin">
          Dashboard
        </NavigationLink>
        <NavigationLink to="maintenance_requests">
          Maintenance Requests
        </NavigationLink>
        <NavigationLink end to="feedback">
          Feedback
        </NavigationLink>
      </Navigation>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPage;
