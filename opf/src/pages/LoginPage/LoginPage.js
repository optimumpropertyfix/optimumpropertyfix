import { Outlet, useLocation, Link } from "react-router-dom";
import styles from "./LoginPage.module.css";
import logo from "./../../assets/logo.png";

function LoginPage() {
  const location = useLocation();

  return (
    <div className={styles.LoginPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img className={styles.logo} src={logo} />
        </div>
        <div className={styles.outlet}>
          <Outlet />
        </div>
        <nav className={styles.nav}>
          {location.pathname === "/login" ? (
            <div className={styles.link_container}>
              <p>Don't have an account?</p>
              <Link to={"/login/create"} className={styles.link}>
                Create Account
              </Link>
            </div>
          ) : (
            <div className={styles.link_container}>
              <p>Already Here?</p>
              <Link to={"/login"} className={styles.link}>
                Sign In
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default LoginPage;
