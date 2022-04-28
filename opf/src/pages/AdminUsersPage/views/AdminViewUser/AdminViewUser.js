import styles from "./AdminViewUser.module.css";
export function AdminViewUser() {
    return (
        <div className={styles.AdminViewUser}>
          <div className={`${styles.view_container} view_layout`}>
            <p className={`${styles.page_title_text} page_title_text`}>
                Viewing User "Name"
            </p>
            <div className={`${styles.content_container} view_content_layout`}>

            </div>
          </div>
        </div>
      );
}