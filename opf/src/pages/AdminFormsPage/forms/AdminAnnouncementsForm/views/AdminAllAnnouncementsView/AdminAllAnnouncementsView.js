import styles from "./AdminAllAnnouncementsView.module.css";
import AnnouncementItem from "../../../../../../components/AnnouncementItem/AnnouncementItem";
export function AdminAllAnnouncementsView() {
  return (
    <div className={styles.AdminAllAnnouncementsView}>
      <p className={`${styles.page_subtitle_text} page_subtitle_text`}>
        View All Announcements
      </p>
      <div className={`${styles.form_container}`}>
        <div className={styles.announcement_list}>
          <AnnouncementItem
            announcement_title="Testing"
            announcement_date="09/06/2000"
            announcement_user="John Doe"
            announcement_message="Testing Testing Testing Testing Testing Testing Testing Testing Testing"
          />
          <AnnouncementItem
            announcement_title="Testing"
            announcement_date="09/06/2000"
            announcement_user="John Doe"
          />
          <AnnouncementItem
            announcement_title="Testing"
            announcement_date="09/06/2000"
            announcement_user="John Doe"
          />
          <AnnouncementItem
            announcement_title="Testing"
            announcement_date="09/06/2000"
            announcement_user="John Doe"
          />
          <AnnouncementItem
            announcement_title="Testing"
            announcement_date="09/06/2000"
            announcement_user="John Doe"
          />
          <AnnouncementItem
            announcement_title="Testing"
            announcement_date="09/06/2000"
            announcement_user="John Doe"
          />
        </div>
      </div>
    </div>
  );
}
