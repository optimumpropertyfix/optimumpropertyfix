import { Outlet } from "react-router-dom";
import styles from "./AppointmentsPage.module.css";
import admin_styles from "./AdminAppointmentsPage.module.css"

export function AdminAppointmentsPage() {
  return (
    <div className={admin_styles.AdminAppointmentsPage}>
      <Outlet className={styles.view_outlet} />
    </div>
  );
}

export function StudentAppointmentsPage() {
  return (
    <div className={styles.AppointmentsPage}>
      <Outlet className={styles.view_outlet} />
    </div>
  );
}
