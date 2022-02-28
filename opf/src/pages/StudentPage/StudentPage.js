import { Outlet } from "react-router-dom";
import {
  Navigation,
  NavigationLink,
} from "../../components/Navigation/Navigation";

function StudentPage() {
  return (
    <div>
      <Navigation>
        <NavigationLink end to="/student">
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

export default StudentPage;
