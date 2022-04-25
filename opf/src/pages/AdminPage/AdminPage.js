import { Outlet, useNavigate } from "react-router-dom";
import {
  SectionNavigation,
  SectionNavLink,
} from "../../components/Navigation/Navigation";
import TokenManager from "../../TokenManager";
import WindowDimensions from "../../WindowDimensions";
import styles from "./AdminPage.module.css";
import symbol from "../../assets/symbol.png"
import page_error_styles from "./PageError.module.css"

function AdminPage() {
  const { window_width, window_height } = WindowDimensions()
  const { revoke_token } = TokenManager();
  const navigate = useNavigate();

  const logout_click = (event) => {
    event.preventDefault();

    revoke_token().then(() => {
      navigate("/login");
    });
  };

  return (
    <>
      { window_width > 900 ? 
      <div className={`${styles.AdminPage} page_layout`}>
        <Outlet />
        <SectionNavigation className="page_navigation">
          <SectionNavLink end to="/admin" icon="dashboard">
            DASHBOARD
          </SectionNavLink>
          <SectionNavLink to="/admin/maintenance_requests" icon="receipt_long">
            TICKETS
          </SectionNavLink>
          <SectionNavLink to="/admin/appointments" icon="schedule">
            APPOINTMENTS
          </SectionNavLink>
          <SectionNavLink end to="/admin/account" icon="account_circle">
            ACCOUNT
          </SectionNavLink>
          <SectionNavLink
            end
            to="/admin/forms"
            icon="description"
          >
            FORMS
          </SectionNavLink>
          <SectionNavLink
            end
            to="/admin/frequently_asked_questions"
            icon="help"
          >
            FAQ
          </SectionNavLink>
        </SectionNavigation>
      </div>
      : 
      <div className={page_error_styles.page_error}> 
        <div className={page_error_styles.content}>
          <div className={page_error_styles.heading}>
            <span className="material-icons">
              error
            </span>
            <p>
              Administrator is Desktop Only. 
            </p>
          </div>
          <div className={page_error_styles.section}>
            <p>
              Please use a desktop device to use administrative functions of Optimum Property Fix. Please logout now.
            </p>
            <button onClick={logout_click}>
              Logout
            </button>
          </div>
        </div>
        <img className={page_error_styles.symbol} src={symbol}/>
      </div> }
    </>
  );
}

export default AdminPage;
