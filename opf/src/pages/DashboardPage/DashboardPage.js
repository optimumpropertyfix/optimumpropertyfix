import styles from "./DashboardPage.module.css";

export function AdminDashboardPage() {
  return (
    <div className={styles.header}>
      <h1>
        Dashboard Page <span className="material-icons">dashboard</span>
      </h1>
    </div>
  );
}

export function StudentDashboardPage() {
  return (
    <div className={`${styles.DashboardPage} section_helper_Section`}>
      <div className="section_helper_Container">
        <div className="text_page_title">
          <p>Your Living Space Dashboard</p>
        </div>
      </div>
    </div>
  );
}
