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

  const logout_click = (event) => {
    event.preventDefault();

    revoke_token().then(() => {
      navigate("/login");
    });
  };

  return (
    <div className={`${styles.StudentPage} page_layout`}>
      <Outlet />
      <SectionNavigation className="page_navigation">
        <SectionNavLink end to="/student" icon="dashboard">
          DASHBOARD
        </SectionNavLink>
        <SectionNavLink to="/student/maintenance_requests" icon="receipt_long">
          TICKETS
        </SectionNavLink>
        <SectionNavLink to="/student/appointments" icon="schedule">
          APPOINTMENTS
        </SectionNavLink>
        <SectionNavLink end to="/student/account" icon="account_circle">
          ACCOUNT
        </SectionNavLink>
        <SectionNavLink
          end
          to="/student/frequently_asked_questions"
          icon="help"
        >
          FAQ
        </SectionNavLink>
        <button onClick={logout_click} className={styles.logout_button}>
          <span className="material-icons">arrow_forward</span>
          <p>LOGOUT</p>
        </button>
      </SectionNavigation>
    </div>
  );
}

export default StudentPage;
