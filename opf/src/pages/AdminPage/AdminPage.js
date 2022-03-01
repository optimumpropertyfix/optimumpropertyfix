import { Outlet } from "react-router-dom";
import {
  Navigation,
  NavigationLink,
} from "../../components/Navigation/Navigation";
import styles from "./AdminPage.module.css";
import symbol from "../../assets/symbol.png";

function AdminPage() {
  return (
    <div className={`${styles.AdminPage} page_helper_container`}>
      <Navigation
        className={`${styles.nav} page_navigation page_helper_NavigationSection`}
      >
        <img src={symbol} alt={""} />
        <NavigationLink
          active_class="page_navigation_link_active"
          className={"page_navigation_link"}
          end
          to="/admin"
        >
          {" "}
          Dashboard
        </NavigationLink>
        <NavigationLink
          active_class="page_navigation_link_active"
          className={"page_navigation_link"}
          to="appointments"
        >
          Appointments
        </NavigationLink>
        <NavigationLink
          active_class="page_navigation_link_active"
          className={"page_navigation_link"}
          to="maintenance_requests"
        >
          Maintenance Requests
        </NavigationLink>
        <NavigationLink
          active_class="page_navigation_link_active"
          className={"page_navigation_link"}
          end
          to="feedback"
        >
          Feedback
        </NavigationLink>
        <NavigationLink
          active_class="page_navigation_link_active"
          className={"page_navigation_link"}
          end
          to="frequently_asked_questions"
        >
          FAQ
        </NavigationLink>
      </Navigation>
      <header
        className={`${styles.header} page_header page_header page_helper_HeaderSection`}
      >
        test
      </header>
      <div className={`${styles.outlet} page_helper_OutletSection`}>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPage;
