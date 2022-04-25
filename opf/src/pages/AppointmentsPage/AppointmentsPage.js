import { Outlet } from "react-router-dom";
import styles from "./AppointmentsPage.module.css";

export function StudentAppointmentsPage() {
  return (
    <div className={styles.AppointmentsPage}>
      <Outlet className={styles.view_outlet} />
    </div>
  );
}
