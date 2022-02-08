import { Outlet } from "react-router-dom";
import {
  Navigation,
  NavigationLink,
} from "../../components/Navigation/Navigation";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div className={styles.LoginPage}>
      <header>
        <img />
        <div>
          <Navigation>
            <NavigationLink end to={"/login"}>
              Sign In
            </NavigationLink>
            <NavigationLink end to={"create"}>
              Create Account
            </NavigationLink>
          </Navigation>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default LoginPage;
