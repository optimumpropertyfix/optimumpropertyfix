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
