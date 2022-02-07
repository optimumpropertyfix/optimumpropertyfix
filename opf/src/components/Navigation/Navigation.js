import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export function Navigation(props) {
  return (
    <nav className={`${styles.Navigation} ${props.className}`}>
      {props.children}
    </nav>
  );
}

export function NavigationLink(props) {
  return (
    <NavLink
      end={props.end}
      to={props.to}
      state={props.state}
      className={({ isActive }) =>
        isActive
          ? `${styles.active} ${props.active_class} ${styles.NavigationLink} ${props.className}`
          : `${styles.NavigationLink} ${props.className}`
      }
    >
      <p>{props.children}</p>
    </NavLink>
  );
}

export function SectionNavigationLink(props) {
  return (
    <NavLink
      to={props.to}
      state={props.state}
      className={({ isActive }) =>
        isActive
          ? `${styles.active} ${props.active_class} ${styles.NavigationLink} ${props.className}`
          : `${styles.NavigationLink} ${props.className}`
      }
    >
      <p>{props.children}</p>
    </NavLink>
  );
}
