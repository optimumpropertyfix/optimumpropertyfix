import { Outlet, useNavigate } from "react-router-dom";
import {
  SectionNavigation,
  SectionNavLink,
} from "../../components/Navigation/Navigation";
import TokenManager from "../../TokenManager";
import styles from "./StudentPage.module.css";

function StudentPage() {
  const { revoke_token } = TokenManager();
  const navigate = useNavigate();

  const handle_SignOut = (event) => {
    event.preventDefault();

    revoke_token().then(() => {
      navigate("/login");
    });
  };

  return (
    <div className={`${styles.StudentPage} page_helper_Page`}>
      <div className="page_helper_OutletSection">
        <Outlet />
      </div>
      <SectionNavigation className="page_helper_NavigationSection">
        <SectionNavLink end to="/student" icon="dashboard">
          DASHBOARD
        </SectionNavLink>
        <SectionNavLink to="/student/maintenance_requests" icon="receipt_long">
          TICKETS
        </SectionNavLink>
        <SectionNavLink
          end
          to="/student/frequently_asked_questions"
          icon="help_outline"
        >
          FAQ
        </SectionNavLink>
        <SectionNavLink end to="/student/account" icon="account_circle">
          ACCOUNT
        </SectionNavLink>
      </SectionNavigation>
    </div>
  );
}

export default StudentPage;
