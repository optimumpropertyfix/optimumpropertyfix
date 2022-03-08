import { Outlet, useNavigate } from "react-router-dom";
import {
  Navigation,
  NavigationLink,
} from "../../components/Navigation/Navigation";
import TokenManager from "../../TokenManager";
import styles from "./AdminPage.module.css";
import symbol from "../../assets/symbol.png";

function AdminPage() {
  const { revoke_token } = TokenManager();
  const navigate = useNavigate();

  const handle_SignOut = (event) => {
    event.preventDefault();

    revoke_token().then(() => {
      navigate("/login");
    });
  };

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
          to="forms"
        >
          Forms
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
        <button
          onClick={handle_SignOut}
          className="header_widget logout_widget"
        >
          <p>Sign Out</p>
          <span className="material-icons">logout</span>
        </button>
      </header>
      <div className={`${styles.outlet} page_helper_OutletSection`}>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPage;
