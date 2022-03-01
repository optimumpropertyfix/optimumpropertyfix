import { Outlet } from "react-router-dom";
import {
  Navigation,
  NavigationLink,
} from "../../components/Navigation/Navigation";

export function AdminFormsPage() {
  return (
    <div>
      <div>
        <h1>Form Page</h1>
        <Navigation>
          <NavigationLink end to="/admin/forms">
            <p>Forms</p>
          </NavigationLink>
          <NavigationLink to="create_announcement">
            <p>Create Annoucement</p>
          </NavigationLink>
          <NavigationLink to="create_faq">
            <p>Create FAQ</p>
          </NavigationLink>
        </Navigation>
      </div>
      <Outlet />
    </div>
  );
}
export default { AdminFormsPage };
