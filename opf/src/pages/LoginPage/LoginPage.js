import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const location = useLocation();

  return (
    <div className={styles.LoginPage}>
      <header>
        <img />
        <div>
          <Navigation>
            {location.pathname === "/login" ? (
              <Link to={"/login/create"}>Create Account</Link>
            ) : (
              <Link to={"/login"}>Sign In</Link>
            )}
          </Navigation>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default LoginPage;
