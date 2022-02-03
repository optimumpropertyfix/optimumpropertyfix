import { NavLink, Outlet } from "react-router-dom";
import styles from "./LoginPage.module.css";
import logo from "./logo.png";

function LoginPage() {
  return (
    <div className={styles.LoginPage}>
      <header>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <nav>
          <NavLink
            end
            to={"/login"}
            className={({ isActive }) =>
              isActive ? `${styles.SectionNavLink}` : `${styles.active}`
            }
          >
            <p>
              Sign In <span>Test</span>
            </p>
          </NavLink>
          <NavLink
            end
            to={"/login/create"}
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.SectionNavLink}`
            }
          >
            <p>
              Don't hava an account? <span>Create one.</span>
            </p>
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default LoginPage;
