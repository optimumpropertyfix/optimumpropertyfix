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
    <div className={`${styles.DashboardPage}`}>
      <div className={`${styles.view_container} view_layout`}>
        <p className={`${styles.page_title_text} page_title_text`}>
          Your Living Space Dashboard
        </p>
        <div className={`${styles.content_container} view_content_layout`}>

        </div>
      </div>
    </div>
  );
}
