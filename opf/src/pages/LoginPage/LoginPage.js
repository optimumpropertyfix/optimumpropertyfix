<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./LoginPage.module.css";
=======
import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { Navigation, NormalLink } from "../../components/Navigation/Navigation";
import styles from "./LoginPage.module.css";
import logo from "./../../assets/logo.png";
import { useEffect } from "react";
>>>>>>> main

function LoginPage() {
  const location = useLocation();

  return (
    <div className={styles.LoginPage}>
<<<<<<< HEAD
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
=======
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
>>>>>>> main
      </header>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default LoginPage;
