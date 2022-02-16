import { Outlet, useLocation } from "react-router-dom";
import { Navigation, NormalLink } from "../../components/Navigation/Navigation";
import styles from "./LoginPage.module.css";
import logo from "./../../assets/logo.png";

function LoginPage() {
  const location = useLocation();

  return (
    <div className={styles.LoginPage}>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} />
        <Navigation className={styles.nav}>
          {location.pathname === "/login" ? (
            <div className={styles.link_container}>
              <p>Don't have an account?</p>
              <NormalLink to={"/login/create"} className={styles.link}>
                Create one now.
              </NormalLink>
            </div>
          ) : (
            <div className={styles.link_container}>
              <p>Already Here? </p>
              <NormalLink to={"/login"} className={styles.link}>
                Sign In.
              </NormalLink>
            </div>
          )}
        </Navigation>
      </header>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default LoginPage;
