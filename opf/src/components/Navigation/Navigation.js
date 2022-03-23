import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import symbol from "../../assets/symbol.png";

export function SectionNavigation(props) {
  return (
    <div className={`${styles.SectionNavigation} ${props.className}`}>
      <img src={symbol} />
      <nav>{props.children}</nav>
    </div>
  );
}

export function SectionNavLink(props) {
  return (
    <NavLink
      end={props.end}
      to={props.to}
      state={props.state}
      className={({ isActive }) =>
        isActive
          ? `${styles.SectionNavLink_active} ${props.active_class} ${styles.SectionNavLink}`
          : `${styles.SectionNavLink}`
      }
    >
      <span className="material-icons"> {props.icon} </span>
      <p> {props.children}</p>
    </NavLink>
  );
}

export function ViewNavigation(props) {
  return (
    <div className={`${styles.ViewNavigation} ${props.className}`}>
      <p>{props.label}</p>
      <nav>{props.children}</nav>
    </div>
  );
}

export function ViewNavLink(props) {
  return (
    <NavLink
      end={props.end}
      to={props.to}
      state={props.state}
      className={({ isActive }) =>
        isActive
          ? `${styles.ViewNavLink_active} ${props.active_class} ${styles.ViewNavLink}`
          : `${styles.ViewNavLink}`
      }
    >
      <span className="material-icons"> {props.icon} </span>
      <p> {props.children}</p>
    </NavLink>
  );
}
