import { Link, NavLink } from "react-router-dom";
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
      {props.children}
    </NavLink>
  );
}

export function NormalLink(props) {
  return (
    <Link
      to={props.to}
      state={props.state}
      className={`${props.className} ${styles.NormalLink}`}
    >
      {props.children}
    </Link>
  );
}
