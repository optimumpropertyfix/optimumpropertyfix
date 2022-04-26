import { Link, NavLink } from "react-router-dom";
import section_navigation_styles from "./SectionNavigation.module.css";
import view_navigation_styles from "./ViewNavigation.module.css";
import form_navigation_styles from "./FormNavigation.module.css";
import symbol from "../../assets/symbol.png";

export function SectionNavigation(props) {
  return (
    <div
      className={`${section_navigation_styles.navigation} ${props.className}`}
    >
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
          ? `${section_navigation_styles.active_link} ${props.active_class} ${section_navigation_styles.link}`
          : `${section_navigation_styles.link}`
      }
    >
      <span className="material-icons"> {props.icon} </span>
      <p> {props.children}</p>
    </NavLink>
  );
}

export function ViewNavigation(props) {
  return (
    <div className={`${view_navigation_styles.navigation} ${props.className}`}>
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
          ? `${view_navigation_styles.active_class} ${props.active_class} ${view_navigation_styles.link}`
          : `${view_navigation_styles.link}`
      }
    >
      <span className="material-icons"> {props.icon} </span>
      <p> {props.children}</p>
    </NavLink>
  );
}

export function FormNavigation(props) {
  return (
    <div className={`${form_navigation_styles.navigation} ${props.className}`}>
      <p>{props.label}</p>
      <nav>{props.children}</nav>
    </div>
  );
}

export function FormNavLink(props) {
  return (
    <NavLink
      end={props.end}
      to={props.to}
      state={props.state}
      className={({ isActive }) =>
        isActive
          ? `${form_navigation_styles.active_class} ${props.active_class} ${form_navigation_styles.link}`
          : `${form_navigation_styles.link}`
      }
    >
      <span className="material-icons"> {props.icon} </span>
      <p> {props.children}</p>
    </NavLink>
  );
}
