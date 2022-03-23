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
      </div>
      <Outlet />
    </div>
  );
}
export default { AdminFormsPage };
