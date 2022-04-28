import styles from "./AdminViewAllUsers.module.css";
import UserItem from "../../../../components/UserItem/UserItem";
export function AdminViewAllUsers() {
    return (
        <div className={styles.AdminViewAllUsers}>
          <div className={`${styles.view_container} view_layout`}>
            <p className={`${styles.page_title_text} page_title_text`}>
                Viewing All OPF Users
            </p>
            <div className={`${styles.content_container} view_content_layout`}>
              <div className={styles.accounts_list}>
								<UserItem user_net_id="jlopez" user_is_student={"1"} user_id={1}/>
              </div>
            </div>
          </div>
        </div>
      );
}